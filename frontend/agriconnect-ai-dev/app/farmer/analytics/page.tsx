export default function AnalyticsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-green-800 mb-6">
        📊 Farm Analytics
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Crops Registered</p>
          <h3 className="text-3xl font-bold text-green-700 mt-2">6</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Quantity Sold</p>
          <h3 className="text-3xl font-bold text-green-700 mt-2">3200 kg</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Active Buyers</p>
          <h3 className="text-3xl font-bold text-green-700 mt-2">4</h3>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Advanced analytics & AI predictions will be integrated later.
      </p>
    </div>
  );
}
