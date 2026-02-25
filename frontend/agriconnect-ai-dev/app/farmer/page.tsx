"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Register Crop",
    desc: "Add crop details and harvest timeline",
    link: "/farmer/register-crop",
    icon: "🌾",
  },
  {
    title: "Buyers",
    desc: "Connect with verified buyers",
    link: "/farmer/buyers",
    icon: "🤝",
  },
  {
    title: "Chat",
    desc: "Negotiate prices in real time",
    link: "/farmer/chat",
    icon: "💬",
  },
  {
    title: "Analytics",
    desc: "View yield & price insights",
    link: "/farmer/analytics",
    icon: "📊",
  },
];

export default function FarmerDashboard() {
  return (
    <div className="space-y-10">
      
      {/* Farmer Genie Section */}
      <div className="flex items-center gap-6 bg-green-100 dark:bg-zinc-800 p-6 rounded-2xl">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
          alt="Farmer Genie"
          className="w-20 h-20"
        />
        <div>
          <h2 className="text-xl font-bold text-green-900 dark:text-white">
            Hello Farmer 👋
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            I’m your AgriGenie. I’ll help you grow smarter and sell better 🌱
          </p>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <motion.a
            key={card.title}
            href={card.link}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-2xl bg-white dark:bg-zinc-900 shadow-lg p-6 cursor-pointer border border-transparent hover:border-green-500"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-lg font-bold text-green-800 dark:text-green-400">
              {card.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              {card.desc}
            </p>
          </motion.a>
        ))}
      </div>

      {/* Crop History Timeline */}
      <div>
        <h2 className="text-2xl font-bold text-green-900 dark:text-white mb-4">
          🌾 Crop History
        </h2>

        <div className="space-y-4">
          {[
            { crop: "Wheat", date: "Jan 2025", status: "Sold Successfully" },
            { crop: "Rice", date: "Oct 2024", status: "High Demand" },
            { crop: "Maize", date: "Jun 2024", status: "Average Yield" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-white dark:bg-zinc-900 p-4 rounded-xl shadow"
            >
              <div>
                <p className="font-semibold text-green-800 dark:text-green-400">
                  {item.crop}
                </p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}