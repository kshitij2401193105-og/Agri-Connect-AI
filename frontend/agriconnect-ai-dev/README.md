## AgriConnect AI – Smart Farmer–Buyer Platform with Crop Disease Detection

AgriConnect AI is a full-stack web application that connects farmers and buyers and uses AI agents to assist with crop health and pricing.

- **Farmers** can register crops, upload crop images for AI‑based disease detection, view AI‑suggested prices, and track their crop history.
- **Buyers** can explore an AI‑curated marketplace, connect with farmers, place orders, and view their order history.
- The app uses a **Next.js** frontend and a **FastAPI + SQLite** backend (`agri.db`) with agents for disease detection, price suggestions, and buyer matching.

### Tech Stack

- **Frontend**: Next.js (App Router, TypeScript, Tailwind-style UI)
- **Backend**: FastAPI (Python), agent modules (`disease_agent`, `price_agent`, `buyer_agent`)
- **Database**: SQLite (`agri.db`) for farmers, crops, buyers, and orders

### Running the Frontend

From `frontend/agriconnect-ai-dev`:

```bash
npm install
npm run dev
```

Then open `https://agri-connect-ai.onrender.com` (or the port shown in the terminal).

### High-Level Features

- AI‑assisted **disease detection** from uploaded crop images, with guidance and confidence score.
- AI‑suggested **crop pricing** and buyer matching.
- Farmer dashboard: crop registration, crop history, analytics.
- Buyer dashboard: marketplace, deals, analytics, chat, and **order history** backed by the orders table.
