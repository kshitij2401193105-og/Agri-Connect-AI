from agents.disease_agent import detect_disease
from agents.price_agent import suggest_price
from agents.buyer_agent import match_buyers

def process_crop(crop, image_path=""):
    disease = detect_disease(image_path)
    price = suggest_price(crop)
    buyers = match_buyers()

    explanation = (
        "Disease predicted using image analysis. "
        "Price suggested from demand trends. "
        "Buyers matched based on availability."
    )

    return disease, price, buyers, explanation