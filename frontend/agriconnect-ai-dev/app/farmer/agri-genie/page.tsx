"use client";

import { useState } from "react";
import { BASE_URL } from "@/lib/api";

export default function AgriGenie() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = async () => {
    if (!question) return;

    setAnswer("Thinking... 🤖");

    try {
      const res = await fetch(`${BASE_URL}/agri-genie`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch {
      setAnswer("Backend not running ❌");
    }
  };

  return (
    <div className="p-10 min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-emerald-700 mb-6">
          🌱 AgriGenie AI Assistant
        </h1>

        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything about crops, disease, fertilizer..."
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={askAI}
          className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700"
        >
          Ask AgriGenie
        </button>

        {answer && (
          <div className="mt-6 bg-green-50 p-4 rounded-lg text-emerald-900 font-medium">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
}