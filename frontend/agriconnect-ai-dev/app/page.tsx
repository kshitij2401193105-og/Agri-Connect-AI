export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-emerald-700 mb-4">
          🌱 AgriConnect AI
        </h1>

        <p className="text-gray-600 mb-6">
          Smart farming • AI disease detection • Direct buyer marketplace
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/farmer-login"
            className="px-6 py-3 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700"
          >
            Farmer Login
          </a>

          <a
            href="/buyer-login"
            className="px-6 py-3 bg-white border rounded-xl shadow hover:bg-gray-50"
          >
            Buyer Login
          </a>
        </div>
      </div>
    </div>
  );
}