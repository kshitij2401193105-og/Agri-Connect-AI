"use client";

import { useEffect, useState } from "react";
import { BASE_URL } from "@/lib/api";

export default function CropHistory() {
  const [crops, setCrops] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/crops`)
      .then((res) => res.json())
      .then(setCrops);
  }, []);

  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold mb-8">🌾 Crop History</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {crops.map((c) => (
          <div key={c.id} className="bg-white p-3 rounded-xl shadow">
            <img
              src={`${BASE_URL}/uploads/${c.filename}`}
              className="rounded-lg h-40 w-full object-cover"
            />
            <p className="text-black mt-2 text-sm">{c.filename}</p>
          </div>
        ))}
      </div>
    </div>
  );
}