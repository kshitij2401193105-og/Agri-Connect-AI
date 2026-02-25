from fastapi import APIRouter, HTTPException
import random

router = APIRouter()

otp_store = {}

@router.post("/send-otp")
def send_otp(phone: str):
    otp = str(random.randint(1000, 9999))
    otp_store[phone] = otp
    print("OTP:", otp)  # hackathon debug
    return {"message": "OTP sent"}

@router.post("/verify-otp")
def verify_otp(phone: str, otp: str):
    stored_otp = otp_store.get(phone)

    if not stored_otp:
        raise HTTPException(status_code=404, detail="OTP not found")

    if otp != stored_otp:
        raise HTTPException(status_code=401, detail="Invalid OTP")

    return {"success": True}