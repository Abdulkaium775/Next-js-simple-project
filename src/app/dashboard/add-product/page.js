"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // ✅ Redirect if unauthenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      await axios.post(
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
  form,
  {
    headers: { "Content-Type": "application/json" },
    withCredentials: true, // ✅ include cookies
  }
);


      setMessage({ type: "success", text: "Product added successfully!" });
      setForm({ name: "", description: "", price: "" });
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.error || error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return <p className="p-6 text-indigo-600">Checking authentication...</p>;
  }

  // While redirecting, prevent render
  if (status === "unauthenticated") return null;

  return (
    <div className="p-6 bg-white min-h-screen flex justify-center items-start">
      <form
        onSubmit={handleSubmit}
        className="bg-indigo-50 p-8 rounded-xl shadow-md w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold text-indigo-600 mb-6">
          Add New Product
        </h1>

        {message.text && (
          <p
            className={`mb-4 p-3 rounded ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message.text}
          </p>
        )}

        <input
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full mb-4 p-3 rounded border"
          required
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full mb-4 p-3 rounded border"
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full mb-4 p-3 rounded border"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-green-500 transition"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
