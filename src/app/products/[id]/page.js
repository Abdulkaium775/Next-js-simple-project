import { connectDB } from "../../lib/mongodb.js";
import Product from "../../models/Product.js";
import mongoose from "mongoose";

export default async function ProductDetails({ params }) {
  try {
    await connectDB();

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return (
        <p className="p-6 text-red-500 bg-red-50 rounded-md max-w-md mx-auto mt-6">
          Invalid product ID.
        </p>
      );
    }

    // Fetch product from MongoDB
    const product = await Product.findById(params.id).lean();

    if (!product) {
      return (
        <p className="p-6 text-red-500 bg-red-50 rounded-md max-w-md mx-auto mt-6">
          Product not found.
        </p>
      );
    }

    return (
      <div className="p-6 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto bg-indigo-50 rounded-xl shadow-md p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
            {product.name}
          </h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-gray-600 mb-6">{product.details}</p>
          <p className="text-2xl md:text-3xl font-semibold text-green-500">
            Price: ${product.price}
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <p className="p-6 text-red-500 bg-red-50 rounded-md max-w-md mx-auto mt-6">
        Error fetching product.
      </p>
    );
  }
}
