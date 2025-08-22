"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side - Links */}
          <div className="flex space-x-6 items-center">
            <Link
              href="/"
              className="text-indigo-600 font-semibold hover:text-green-500 transition"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-indigo-600 font-semibold hover:text-green-500 transition"
            >
              Products
            </Link>
            {session && (
              <Link
                href="/dashboard/add-product"
                className="text-indigo-600 font-semibold hover:text-green-500 transition"
              >
                Add Product
              </Link>
            )}
          </div>

          {/* Right side - Login/Logout */}
          <div className="flex items-center space-x-4">
            {session ? (
              <button
                onClick={() => signOut()}
                className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-500 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-500 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu (optional) */}
      <div className="sm:hidden px-4 pb-4">
        <div className="flex flex-col space-y-2">
          <Link
            href="/"
            className="text-indigo-600 font-semibold hover:text-green-500 transition"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-indigo-600 font-semibold hover:text-green-500 transition"
          >
            Products
          </Link>
          {session && (
            <Link
              href="/dashboard/add-product"
              className="text-indigo-600 font-semibold hover:text-green-500 transition"
            >
              Add Product
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
