import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgriConnect AI",
  description: "AI-powered platform for farmers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          min-h-screen
          overflow-x-hidden
        `}
      >
        {/* 🌾 Background */}
        <div
          className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1598514982845-fdf08f8f6cda?auto=format&fit=crop&w=1920&q=80')",
          }}
        />

        {/* 🌿 Overlay */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-950/85 via-black/70 to-green-900/85" />

        {/* ✅ GLOBAL NAVBAR */}
        <Navbar />

        {/* ✅ CONTENT */}
        <main className="relative min-h-screen bg-transparent pt-20 px-4">
          {children}
        </main>
      </body>
    </html>
  );
}