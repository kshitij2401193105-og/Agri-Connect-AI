export default function BuyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 px-6 py-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-10">
          🧺 Buyer Panel
        </h2>

        <nav className="space-y-2 text-slate-700 font-medium">
          <NavItem icon="📦" label="Marketplace" href="/buyer" />
          <NavItem icon="🤝" label="Deals" href="/buyer/deals" />
          <NavItem icon="📊" label="Analytics" href="/buyer/analytics" />
          <NavItem icon="💬" label="Chat" href="/buyer/chat" />
          <NavItem icon="🧾" label="Order History" href="/buyer/orders" />
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 px-12 py-10">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          {children}
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, href }: any) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition"
    >
      <span>{icon}</span>
      <span>{label}</span>
    </a>
  );
}