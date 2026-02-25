import Link from "next/link";

export default function BuyersPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-green-800 mb-6">
        🤝 Interested Buyers
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Buyer 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold">GreenFoods Pvt Ltd</h3>
          <p className="text-gray-600">Looking for Wheat – 500kg</p>

          <Link href="/farmer/chat">
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Chat with Buyer
            </button>
          </Link>
        </div>

        {/* Buyer 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold">AgroMart</h3>
          <p className="text-gray-600">Interested in Rice – 1000kg</p>

          <Link href="/farmer/chat">
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Chat with Buyer
            </button>
          </Link>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Buyer matching & real-time chat will be integrated later.
      </p>
    </div>
  );
}