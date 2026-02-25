export default function CropHistoryPage() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-emerald-700 mb-6 flex items-center gap-2">
        🌾 Crop History
      </h2>

      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-left">
          <thead className="bg-emerald-700 text-white">
            <tr>
              <th className="px-6 py-4 font-semibold">Crop</th>
              <th className="px-6 py-4 font-semibold">Season</th>
              <th className="px-6 py-4 font-semibold">Quantity</th>
              <th className="px-6 py-4 font-semibold">Status</th>
            </tr>
          </thead>

          <tbody className="bg-white text-slate-800">
            <tr className="border-b">
              <td className="px-6 py-4 font-medium">Wheat</td>
              <td className="px-6 py-4">Rabi 2024</td>
              <td className="px-6 py-4">800 kg</td>
              <td className="px-6 py-4 font-semibold text-green-600">
                Sold
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 font-medium">Rice</td>
              <td className="px-6 py-4">Kharif 2023</td>
              <td className="px-6 py-4">1200 kg</td>
              <td className="px-6 py-4 font-semibold text-amber-600">
                Pending
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}