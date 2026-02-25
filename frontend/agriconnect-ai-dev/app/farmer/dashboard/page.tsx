"use client";

import Link from "next/link";

export default function FarmerDashboard() {
  return (
    <div className="min-h-screen bg-[#f1f5f9] p-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">
        🌾 Farmer Dashboard
      </h1>

      <p className="text-gray-500 mb-8">
        Manage crops, detect diseases and connect with buyers
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Register crop */}
        <Link href="/farmer/register-crop">
          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg cursor-pointer transition">
            <h2 className="text-xl font-semibold mb-2">🌱 Register Crop</h2>
            <p className="text-gray-500">Upload crop & store in database</p>
          </div>
        </Link>

        {/* Disease detection */}
        <Link href="/farmer/disease-detection">
          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg cursor-pointer transition">
            <h2 className="text-xl font-semibold mb-2">🦠 Disease Detection</h2>
            <p className="text-gray-500">AI detects crop disease instantly</p>
          </div>
        </Link>

        {/* Crop history */}
        <Link href="/farmer/crops">
          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg cursor-pointer transition">
            <h2 className="text-xl font-semibold mb-2">📦 Crop History</h2>
            <p className="text-gray-500">View uploaded crops & images</p>
          </div>
        </Link>

        {/* Genie */}
        <Link href="/farmer/agri-genie">
          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg cursor-pointer transition">
            <h2 className="text-xl font-semibold mb-2">🤖 AgriGenie AI</h2>
            <p className="text-gray-500">Ask farming questions to AI</p>
          </div>
        </Link>

        {/* Schemes */}
        <Link href="/farmer/schemes">
          <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg cursor-pointer transition">
            <h2 className="text-xl font-semibold mb-2">🏛 Govt Schemes</h2>
            <p className="text-gray-500">Discover subsidies & benefits</p>
          </div>
        </Link>
      </div>
    </div>
  );
}