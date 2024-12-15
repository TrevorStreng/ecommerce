import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for the product."],
  },
  price: {
    type: Number,
    required: [true, "Please provide a price for the product."],
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
