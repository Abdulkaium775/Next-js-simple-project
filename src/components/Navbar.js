"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side - Links / Mobile toggle */}
          <div className="flex items-center space-x-4">
            {/* Desktop links */}
            <div className="hidden sm:flex space-x-6 items-center">
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

            {/* Mobile menu button */}
            <button
              className="sm:hidden text-2xl text-indigo-600"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* Right side - Login/Logout always visible */}
          <div>
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

      {/* Mobile Menu - slides from left */}
      {mobileOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-2/3 bg-white shadow-md h-screen p-4 z-50 flex flex-col space-y-4">
          <Link
            href="/"
            className="text-indigo-600 font-semibold hover:text-green-500 transition"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-indigo-600 font-semibold hover:text-green-500 transition"
            onClick={() => setMobileOpen(false)}
          >
            Products
          </Link>
          {session && (
            <Link
              href="/dashboard/add-product"
              className="text-indigo-600 font-semibold hover:text-green-500 transition"
              onClick={() => setMobileOpen(false)}
            >
              Add Product
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
