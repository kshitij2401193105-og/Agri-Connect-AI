from fastapi import FastAPI, UploadFile, File, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import shutil
import os
import sqlite3

from database import engine, Base, SessionLocal
import models, schemas, auth
from agents.orchestrator import process_crop
from agents.disease_agent import detect_disease_with_guidance
from otp_auth import router as otp_router
from auth import router as auth_router

# ---------- APP ----------
app = FastAPI()

# ---------- CORS ----------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- STATIC FOLDER ----------
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# ---------- DB ----------
Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ---------- ROUTERS ----------
app.include_router(otp_router)
app.include_router(auth_router)

# ---------- HOME ----------
@app.get("/")
def home():
    return {"message": "Agri Backend Running 🚀"}

# ---------- SQLITE OTP LOGIN ----------
from pydantic import BaseModel

class Login(BaseModel):
    mobile: str
    role: str

@app.post("/otp-login")
def otp_login(data: Login):
    conn = sqlite3.connect("agri.db")
    c = conn.cursor()

    c.execute("""
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        mobile TEXT,
        role TEXT
    )
    """)

    c.execute("INSERT INTO users (mobile, role) VALUES (?, ?)", (data.mobile, data.role))

    # Also keep a simple record in a buyers table when role is buyer,
    # so buyer logins are visible in the database.
    if data.role.lower() == "buyer":
        c.execute(
            """
        CREATE TABLE IF NOT EXISTS buyers(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            mobile TEXT
        )
        """
        )
        c.execute(
            "INSERT INTO buyers (mobile) VALUES (?)",
            (data.mobile,),
        )

    conn.commit()
    conn.close()

    return {"msg": "login success"}

# ---------- OTP ----------
@app.post("/send-otp")
def send(phone: str):
    return auth.send_otp(phone)

@app.post("/verify-otp")
def verify(phone: str, otp: str):
    return {"verified": auth.verify_otp(phone, otp)}

# ---------- CREATE FARMER ----------
@app.post("/create-farmer")
def create_farmer(f: schemas.FarmerCreate, db=Depends(get_db)):
    farmer = models.Farmer(**f.dict())
    db.add(farmer)
    db.commit()
    return {"msg": "Farmer created"}

# ---------- REGISTER CROP ----------
@app.post("/register-crop")
def register_crop(c: schemas.CropCreate, image_path: str = "", db=Depends(get_db)):
    disease, price, buyers, explanation = process_crop(c.crop_name, image_path)

    crop = models.Crop(
        farmer_id=c.farmer_id,
        crop_name=c.crop_name,
        quantity=c.quantity,
        image_url=image_path,
        disease=disease,
        price=price,
    )
    db.add(crop)
    db.commit()

    return {
        "disease": disease,
        "price": price,
        "buyers": buyers,
        "explanation": explanation,
    }

@app.post("/upload-image")
def upload(file: UploadFile = File(...)):
    path = f"{UPLOAD_FOLDER}/{file.filename}"

    with open(path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    conn = sqlite3.connect("agri.db")
    c = conn.cursor()

    c.execute(
        """
    CREATE TABLE IF NOT EXISTS crops (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        filename TEXT
    )
    """
    )

    # auto-fix old DB
    try:
        c.execute("ALTER TABLE crops ADD COLUMN filename TEXT")
    except Exception:
        pass

    c.execute("INSERT INTO crops (filename) VALUES (?)", (file.filename,))
    conn.commit()
    conn.close()

    disease, guidance, confidence = detect_disease_with_guidance(path)
    confidence_pct = f"{int(confidence * 100)}%"

    return {
        "filename": file.filename,
        "image_url": f"/{path}",
        "disease": disease,
        "confidence": confidence_pct,
        "guidance": guidance,
    }
    
from fastapi import Body

@app.post("/agri-genie")
def agri_genie(data: dict = Body(...)):
    q = data.get("question", "")

    return {
        "answer": f"AI Suggestion: For '{q}', ensure proper irrigation, fertilizer balance and disease monitoring."
    }

import sqlite3


@app.get("/crops")
def get_crops():
    """
    Raw listing of all rows from the crops table (for debugging/utility).
    """
    try:
        conn = sqlite3.connect("agri.db")
        conn.row_factory = sqlite3.Row
        c = conn.cursor()

        rows = c.execute("SELECT * FROM crops").fetchall()
        data = [dict(r) for r in rows]

        conn.close()
        return data
    except Exception as e:
        return {"error": str(e)}


@app.get("/farmer/crops")
def get_farmer_crops():
    """
    Slimmed view used by the farmer dashboard `My Crops` page.
    """
    conn = sqlite3.connect("agri.db")
    cur = conn.cursor()

    cur.execute("SELECT crop_name, quantity, disease, price, image_url FROM crops")
    rows = cur.fetchall()
    conn.close()

    crops = [
        {
            "name": r[0],
            "qty": r[1],
            "disease": r[2],
            "price": r[3],
            "image": r[4],
        }
        for r in rows
    ]

    return {"crops": crops}


@app.post("/orders")
def create_order(o: schemas.OrderCreate, db=Depends(get_db)):
    order = models.Order(
        buyer_name=o.buyer_name,
        crop_name=o.crop_name,
        quantity=o.quantity,
        price=o.price,
        status="Pending",
    )
    db.add(order)
    db.commit()
    db.refresh(order)
    return {
        "id": order.id,
        "buyer_name": order.buyer_name,
        "crop_name": order.crop_name,
        "quantity": order.quantity,
        "price": order.price,
        "status": order.status,
    }


@app.get("/orders")
def list_orders(db=Depends(get_db)):
    orders = db.query(models.Order).all()
    return [
        {
            "id": o.id,
            "buyer_name": o.buyer_name,
            "crop_name": o.crop_name,
            "quantity": o.quantity,
            "price": o.price,
            "status": o.status,
        }
        for o in orders
    ]