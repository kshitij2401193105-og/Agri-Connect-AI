"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FarmerLogin() {
  const [mobile, setMobile] = useState("");
  const router = useRouter();

  const login = async () => {
    try {
      if (mobile.length !== 10) {
        alert("Enter valid mobile");
        return;
      }

      const res = await fetch("http://127.0.0.1:8000/otp-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: mobile,
          role: "farmer",
        }),
      });

      const data = await res.json();
      console.log(data);

      router.push("/farmer");

    } catch (err) {
      alert("Backend not connected");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="bg-black/40 backdrop-blur-lg p-10 rounded-2xl w-[350px]">

        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">
          🌾 Farmer Login
        </h2>

        <input
          placeholder="Enter mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full p-3 rounded bg-black/50 border border-green-400 mb-5"
        />

        <button
          onClick={login}
          className="w-full bg-green-600 hover:bg-green-700 py-3 rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
}