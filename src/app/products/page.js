import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import Link from "next/link";

export default async function ProductsPage() {
  await connectDB();
  const products = await Product.find();

  return (
    <div className="bg-white min-h-screen p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-6 text-center">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p._id}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between"
          >
            <div>
              <h2 className="font-bold text-xl sm:text-2xl text-indigo-600 mb-2">
                {p.name}
              </h2>
              <p className="text-gray-700 mb-4">{p.description}</p>
              <p className="text-green-500 font-semibold text-lg">${p.price}</p>
            </div>
            <Link
              href={`/products/${p._id}`}
              className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition text-center"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
