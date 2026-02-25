"use client";

import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { sender: "genie", text: "Hello Farmer 👋 I’m AgriGenie. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const getGenieReply = (message: string) => {
    const msg = message.toLowerCase();

    if (msg.includes("price") || msg.includes("wheat")) {
      return "📈 Wheat prices are trending up. Expected range: ₹2200–₹2400 / quintal.";
    }
    if (msg.includes("buyer")) {
      return "🤝 I found verified buyers for your crop. Visit the Buyers section.";
    }
    if (msg.includes("scheme")) {
      return "🏛 You may be eligible for PM-KISAN & crop insurance schemes.";
    }
    if (msg.includes("hello") || msg.includes("hi")) {
      return "👋 Hello! How can I help you today?";
    }
    return "🌱 Try asking about crop prices, buyers, or schemes.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "you", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply = getGenieReply(input);
      setMessages((prev) => [
        ...prev,
        { sender: "genie", text: reply },
      ]);
      setTyping(false);
    }, 1200);
  };

  return (
    <div className="bg-[#0b1220] rounded-2xl p-6 text-white max-w-4xl">

      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src="/genie.png"
          alt="AgriGenie"
          className="w-14 h-14 animate-bounce"
        />
        <div>
          <h2 className="text-xl font-semibold text-emerald-400">
            AgriGenie 🤖🌱
          </h2>
          <p className="text-sm text-gray-400">
            Your AI Farming Assistant
          </p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="bg-black/40 rounded-xl p-4 h-64 overflow-y-auto space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender === "you" ? "text-right" : ""}>
            <span
              className={
                msg.sender === "genie"
                  ? "text-emerald-400"
                  : "text-white"
              }
            >
              {msg.sender === "genie" ? "Genie" : "You"}:
            </span>{" "}
            {msg.text}
          </div>
        ))}

        {typing && (
          <p className="text-emerald-400 animate-pulse">
            AgriGenie is typing...
          </p>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2 mt-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask AgriGenie..."
          className="flex-1 bg-black/50 border border-emerald-400/30 rounded-lg px-4 py-2 text-white"
        />
        <button
          onClick={sendMessage}
          className="bg-emerald-400 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}