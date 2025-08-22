import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
});

// Prevent model overwrite on hot reload
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema, "products");
