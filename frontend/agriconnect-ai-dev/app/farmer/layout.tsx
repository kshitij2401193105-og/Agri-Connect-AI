export default function FarmerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-emerald-100 shadow-sm px-6 py-8">
        <h2 className="text-2xl font-bold text-emerald-600 mb-8">AgriConnect 🌱</h2>

        <nav className="flex flex-col gap-4 text-gray-600 font-medium">
          <a href="/farmer/dashboard">Dashboard</a>
          <a href="/farmer/register-crop">Register Crop</a>
          <a href="/farmer/crops">Crop History</a>
          <a href="/farmer/disease-detection">Disease Detection</a>
          <a href="/farmer/schemes">Govt Schemes</a>
          <a href="/farmer/agri-genie">AgriGenie AI</a>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}