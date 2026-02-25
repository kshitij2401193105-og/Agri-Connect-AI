"use client";
import { motion } from "framer-motion";

export default function DashboardCard({
  title,
  description,
  icon,
}: any) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-slate-900 text-white rounded-2xl p-6 shadow-lg cursor-pointer"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-emerald-400">{title}</h3>
      <p className="text-sm text-slate-400 mt-1">{description}</p>
    </motion.div>
  );
}