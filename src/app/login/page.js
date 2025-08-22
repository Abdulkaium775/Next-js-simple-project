"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="bg-indigo-50 p-10 rounded-xl shadow-lg w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">
          Welcome Back
        </h1>
        <p className="text-gray-600 mb-8">
          Sign in to access amazing products and offers
        </p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-green-500 transition-colors"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
