import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity must be at least 1"],
      },
    },
  ],
  shippingInfo: {
    name: {
      type: String,
      required: [true, "Please provide a name for shipping"],
    },
    street: {
      type: String,
      required: [true, "Please provide a street for shipping"],
    },
    city: {
      type: String,
      required: [true, "Please provide a city for shipping"],
    },
    state: {
      type: String,
      required: [true, "Please provide a state for shipping"],
    },
    zipcode: {
      type: String,
      required: [true, "Please provide a zipcode for shipping"],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
