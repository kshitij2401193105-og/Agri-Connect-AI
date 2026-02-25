export default function MarketPrices() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-green-800 mb-6">
        💰 Market Prices
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Wheat</h3>
          <p className="text-gray-600">₹2,200 / quintal</p>
          <p className="text-sm text-gray-500 mt-2">Demand: High</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Rice</h3>
          <p className="text-gray-600">₹3,100 / quintal</p>
          <p className="text-sm text-gray-500 mt-2">Demand: Medium</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Maize</h3>
          <p className="text-gray-600">₹1,850 / quintal</p>
          <p className="text-sm text-gray-500 mt-2">Demand: Low</p>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Prices are AI-predicted and will update in real-time (future scope).
      </p>
    </div>
  );
}