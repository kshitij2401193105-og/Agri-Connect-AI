export default function CropIntelligence() {
  return (
    <div className="min-h-screen bg-green-50 p-10">
      <h1 className="text-4xl font-bold mb-6">
        🤖 AI Crop Intelligence
      </h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">
          Crop Analysis (ML Powered)
        </h2>

        {/* Inputs */}
        <input
          placeholder="Crop Name (e.g., Wheat)"
          className="w-full bg-black text-white px-4 py-2 rounded mb-4"
        />

        <input
          placeholder="Location"
          className="w-full bg-black text-white px-4 py-2 rounded mb-4"
        />

        <button className="w-full bg-green-600 text-white py-3 rounded">
          Analyze Crop
        </button>

        {/* Output Placeholder */}
        <div className="mt-6 bg-green-100 p-4 rounded">
          <p>🌱 Expected Yield: —</p>
          <p>🦠 Disease Risk: —</p>
          <p>📅 Best Harvest Time: —</p>
          <p>💰 Expected Price: —</p>
        </div>
      </div>
    </div>
  );
}