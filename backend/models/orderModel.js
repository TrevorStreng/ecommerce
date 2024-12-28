import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
  },
  products: {
    type: Array,
    required: [true, "Please add items to cart"],
  },
  address: {
    type: String,
    required: [true, "Please provide an address"],
  },
});
