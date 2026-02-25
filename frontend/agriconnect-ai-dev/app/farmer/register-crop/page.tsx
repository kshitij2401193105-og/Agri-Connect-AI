"use client";

import { FormEvent, useState } from "react";

export default function RegisterCrop() {
  const [farmerId, setFarmerId] = useState("");
  const [cropName, setCropName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!farmerId || !cropName || !quantity) {
      alert("Please fill Farmer ID, Crop Name and Quantity.");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch("http://127.0.0.1:8000/register-crop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          farmer_id: Number(farmerId),
          crop_name: cropName,
          quantity,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to register crop");
      }

      const data = await res.json();
      alert(
        `Crop registered.\nDisease: ${data.disease}\nSuggested price: ${data.price}`
      );
    } catch (err) {
      alert("Error registering crop. Please check backend.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-green-800 mb-6">
        📝 Register Crop
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          className="w-full p-3 rounded bg-black text-white placeholder-gray-400"
          placeholder="Farmer ID (e.g. 1)"
          value={farmerId}
          onChange={(e) => setFarmerId(e.target.value)}
        />

        <input
          className="w-full p-3 rounded bg-black text-white placeholder-gray-400"
          placeholder="Crop Name (e.g. Wheat)"
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}
        />

        <input
          className="w-full p-3 rounded bg-black text-white placeholder-gray-400"
          placeholder="Quantity (kg)"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white py-3 rounded-lg text-lg hover:bg-green-700 disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting..." : "Submit Crop"}
        </button>
      </form>
    </div>
  );
}