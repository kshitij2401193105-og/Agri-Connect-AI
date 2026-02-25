otp_store = {}

def send_otp(phone):
    otp_store[phone] = "1234"
    return "OTP sent"

def verify_otp(phone, otp):
    return otp_store.get(phone) == otp

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from passlib.hash import bcrypt

from database import SessionLocal, engine
from models import User, Base

router = APIRouter()

Base.metadata.create_all(bind=engine)

# DB dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/signup")
def signup(name: str, email: str, password: str, role: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()

    if user:
        raise HTTPException(status_code=400, detail="Email already exists")

    new_user = User(
        name=name,
        email=email,
        password=bcrypt.hash(password),
        role=role,
    )

    db.add(new_user)
    db.commit()

    return {"message": "Signup successful"}


@router.post("/login")
def login(email: str, password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()

    if not user or not bcrypt.verify(password, user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {"message": "Login success", "role": user.role, "user_id": user.id}