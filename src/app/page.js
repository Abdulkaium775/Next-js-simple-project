import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-indigo-100 text-indigo-700 text-center py-20 px-4 mb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Welcome to My Shop
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your one-stop solution for amazing products
        </p>
        <Link
          href="/products"
          className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition"
        >
          Browse Products
        </Link>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Highlights
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Highlight Card 1 */}
          <div className="p-6 bg-white border-2 border-green-100 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">
              Wide Selection
            </h3>
            <p className="text-gray-600">
              Browse through a wide variety of products to find what you need.
            </p>
          </div>
          {/* Highlight Card 2 */}
          <div className="p-6 bg-white border-2 border-green-100 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Get your orders delivered quickly and reliably to your doorstep.
            </p>
          </div>
          {/* Highlight Card 3 */}
          <div className="p-6 bg-white border-2 border-green-100 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">
              Best Support
            </h3>
            <p className="text-gray-600">
              Our friendly support team is here to help you anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
