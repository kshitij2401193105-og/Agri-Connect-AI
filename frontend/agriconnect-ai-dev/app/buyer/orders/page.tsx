"use client";

import { useEffect, useState } from "react";

interface Order {
  id: number;
  buyer_name: string;
  crop_name: string;
  quantity: string;
  price: string;
  status: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/orders")
      .then((r) => r.json())
      .then((data) => setOrders(data))
      .catch(() => setOrders([]));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">📦 Order History</h1>

      {orders.length === 0 && (
        <p className="text-gray-500">No orders yet. Connect with a farmer to place your first order.</p>
      )}

      <div className="grid gap-4">
        {orders.map((o) => (
          <div
            key={o.id}
            className="bg-white p-4 rounded-xl shadow border border-emerald-100"
          >
            <p className="font-semibold">{o.crop_name}</p>
            <p>Buyer: {o.buyer_name}</p>
            <p>Quantity: {o.quantity}</p>
            <p>Price: {o.price}</p>
            <p className="text-emerald-600 font-medium">{o.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}