import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4">
          🌱 AgriConnect AI
        </h1>

        <p className="text-gray-600 mb-8 max-w-md">
          Smart farming • AI crop disease detection • Direct buyer marketplace
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/farmer-login"
            className="px-6 py-3 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700 transition"
          >
            Farmer Login
          </Link>

          <Link
            href="/buyer-login"
            className="px-6 py-3 bg-white border rounded-xl shadow hover:bg-gray-50 transition"
          >
            Buyer Login
          </Link>
        </div>
      </div>
    </main>
  );
}