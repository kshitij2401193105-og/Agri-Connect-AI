"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow px-8 py-4 flex justify-between items-center">

      <Link href="/">
        <h1 className="text-2xl font-bold text-green-700 cursor-pointer">
          🌱 AgriConnect AI
        </h1>
      </Link>

      <div className="flex gap-6 font-medium">
        <Link href="/">Home</Link>
        <Link href="/farmer-login">Farmer Login</Link>
        <Link href="/buyer-login">Buyer Login</Link>
        <Link href="/farmer/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}