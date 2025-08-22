import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-50 to-green-50 text-gray-700 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Copyright */}
        <p className="text-sm md:text-base text-gray-600">
          © {new Date().getFullYear()} My Shop. All rights reserved.
        </p>

        {/* Middle: Quick Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="/"
            className="text-indigo-600 font-medium hover:text-green-500 transition-colors"
          >
            Home
          </a>
          <a
            href="/products"
            className="text-indigo-600 font-medium hover:text-green-500 transition-colors"
          >
            Products
          </a>
          <a
            href="/login"
            className="text-indigo-600 font-medium hover:text-green-500 transition-colors"
          >
            Login
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="text-white bg-indigo-600 p-2 rounded-full hover:bg-green-500 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-white bg-indigo-600 p-2 rounded-full hover:bg-green-500 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-white bg-indigo-600 p-2 rounded-full hover:bg-green-500 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
