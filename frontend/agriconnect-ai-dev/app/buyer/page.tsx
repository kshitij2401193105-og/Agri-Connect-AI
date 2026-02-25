"use client";

import { useState } from "react";

export default function BuyerMarketplace() {
  const [isPlacing, setIsPlacing] = useState(false);

  const crops = [
    {
      crop: "Wheat",
      qty: "500 kg",
      price: "₹28/kg",
      farmer: "Farmer – Maharashtra",
    },
    {
      crop: "Tomato",
      qty: "300 kg",
      price: "₹22/kg",
      farmer: "Farmer – Karnataka",
    },
    {
      crop: "Maize",
      qty: "700 kg",
      price: "₹18/kg",
      farmer: "Farmer – MP",
    },
  ];

  const handleConnect = async (item: (typeof crops)[number]) => {
    try {
      setIsPlacing(true);
      await fetch("http://127.0.0.1:8000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          buyer_name: "Demo Buyer",
          crop_name: item.crop,
          quantity: item.qty,
          price: item.price,
        }),
      });

      alert("Buyer–Farmer Connected ✅ Order added to history.");
    } catch (e) {
      alert("Failed to create order. Please check backend.");
    } finally {
      setIsPlacing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-6">🛒 Buyer Marketplace</h1>
      <p className="mb-8 text-gray-700">
        AI-matched crops based on demand & proximity
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {crops.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">🌾 {item.crop}</h2>
            <p>Quantity: {item.qty}</p>
            <p>Farmer: {item.farmer}</p>
            <p className="font-semibold mt-2">{item.price}</p>

            <button
              onClick={() => handleConnect(item)}
              disabled={isPlacing}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded disabled:bg-gray-400"
            >
              {isPlacing ? "Connecting..." : "Connect with Farmer"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}