"use client";
import { useEffect, useState } from "react";

export default function MyCrops() {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/farmer/crops")
      .then((r) => r.json())
      .then((d) => setCrops(d.crops));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">🌾 My Crops</h1>

      <div className="grid gap-4">
        {crops.map((c: any, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <p className="font-semibold">{c.name}</p>
            <p>{c.qty}</p>
            <p>{c.disease}</p>
            <p>{c.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}