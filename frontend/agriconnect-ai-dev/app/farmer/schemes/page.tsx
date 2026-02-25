export default function SchemesPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-green-800 mb-6">
        🏛 Government Schemes
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg">
            PM Fasal Bima Yojana
          </h3>
          <p className="text-gray-600 mt-2">
            Crop insurance scheme protecting farmers against losses.
          </p>
          <button className="mt-4 text-green-700 font-medium">
            Learn More →
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg">
            Soil Health Card Scheme
          </h3>
          <p className="text-gray-600 mt-2">
            Helps farmers improve soil quality & productivity.
          </p>
          <button className="mt-4 text-green-700 font-medium">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
}