import os
from typing import Tuple


def _analyze_image_stub(image_path: str) -> Tuple[str, str, float]:
    """
    Lightweight, rule-based placeholder for a real vision model.
    Uses filename hints to simulate disease detection and returns:
    (disease_name, guidance, confidence_score_0_to_1).
    """
    filename = os.path.basename(image_path).lower()

    if any(k in filename for k in ["blight", "spot", "leaf"]):
        disease = "Leaf Blight"
        guidance = (
            "Remove heavily infected leaves, avoid overhead irrigation, and apply a "
            "recommended fungicide with copper or mancozeb as per local guidelines."
        )
        confidence = 0.92
    elif "rust" in filename:
        disease = "Stem Rust"
        guidance = (
            "Use resistant varieties if available, remove volunteer host plants, and "
            "apply systemic fungicides early in the infection cycle."
        )
        confidence = 0.89
    elif any(k in filename for k in ["mildew", "powdery"]):
        disease = "Powdery Mildew"
        guidance = (
            "Improve air circulation, avoid excess nitrogen fertilization, and apply "
            "sulfur-based or other recommended fungicides according to label directions."
        )
        confidence = 0.9
    else:
        disease = "No major disease detected"
        guidance = (
            "Crop appears generally healthy. Continue regular monitoring, maintain "
            "balanced fertilization, and ensure proper irrigation and weed control."
        )
        confidence = 0.75

    return disease, guidance, confidence


def detect_disease_with_guidance(image_path: str) -> Tuple[str, str, float]:
    """
    Public helper that a real AI model can later replace.
    Returns (disease, guidance, confidence_score_0_to_1).
    """
    return _analyze_image_stub(image_path)


def detect_disease(image_path: str) -> str:
    """
    Backwards‑compatible API used by the orchestrator: returns only the disease name.
    """
    disease, _, _ = _analyze_image_stub(image_path)
    return disease