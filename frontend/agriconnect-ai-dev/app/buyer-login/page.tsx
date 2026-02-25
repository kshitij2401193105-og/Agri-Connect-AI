"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BuyerLogin() {
  const [mobile, setMobile] = useState("");
  const router = useRouter();

  const login = async () => {
    if (!mobile) {
      alert("Please enter a mobile number");
      return;
    }

    // For submission/demo, we proceed without blocking on backend availability.
    // In a full production setup, this is where you'd call the OTP backend.
    router.push("/buyer");
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="bg-black/40 backdrop-blur-lg p-10 rounded-2xl shadow-xl w-[380px]">

        <h2 className="text-3xl font-bold text-center text-green-400 mb-6">
          🛒 Buyer Login
        </h2>

        <input
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full p-3 rounded-lg bg-black/50 border border-green-400 mb-5"
        />

        <button
          onClick={login}
          className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold"
        >
          Login
        </button>

      </div>
    </div>
  );
}