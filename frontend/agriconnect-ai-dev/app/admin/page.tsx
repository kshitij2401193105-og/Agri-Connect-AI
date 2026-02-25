export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-red-700 mb-6">
        🛠 Admin Panel
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg">Total Farmers</h3>
          <p className="text-2xl font-bold mt-2">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg">Total Buyers</h3>
          <p className="text-2xl font-bold mt-2">45</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg">Total Transactions</h3>
          <p className="text-2xl font-bold mt-2">310</p>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Admin controls & moderation features will be added later.
      </p>
    </div>
  );
}