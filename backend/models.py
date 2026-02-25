from sqlalchemy import Column, Integer, String, ForeignKey
from database import Base


class Farmer(Base):
    __tablename__ = "farmers"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    phone = Column(String)
    location = Column(String)


class Crop(Base):
    __tablename__ = "crops"

    id = Column(Integer, primary_key=True)
    farmer_id = Column(Integer, ForeignKey("farmers.id"))
    crop_name = Column(String)
    quantity = Column(String)
    image_url = Column(String)
    disease = Column(String)
    price = Column(String)


class Buyer(Base):
    __tablename__ = "buyers"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    location = Column(String)


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True)
    password = Column(String)
    role = Column(String)


class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True)
    buyer_name = Column(String)
    crop_name = Column(String)
    quantity = Column(String)
    price = Column(String)
    status = Column(String)