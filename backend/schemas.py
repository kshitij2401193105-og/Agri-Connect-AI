from pydantic import BaseModel


class FarmerCreate(BaseModel):
    name: str
    phone: str
    location: str


class CropCreate(BaseModel):
    farmer_id: int
    crop_name: str
    quantity: str


class BuyerCreate(BaseModel):
    name: str
    location: str


class OrderCreate(BaseModel):
    buyer_name: str
    crop_name: str
    quantity: str
    price: str