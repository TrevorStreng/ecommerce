import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { CartItem } from "../components/CartItem";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      name: "Cotton Blend T-Shirt",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      size: "M",
      quantity: 1,
    },
    {
      name: "Slim Fit Jeans",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      size: "32",
      quantity: 1,
    },
  ]);
  const updateQuantity = (index: number, change: number) => {
    setCartItems((items) =>
      items.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      )
    );
  };
  const removeItem = (index: number) => {
    setCartItems((items) => items.filter((_, i) => i !== index));
  };
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 5.99;
  const total = subtotal + shipping;
  const navigate = useNavigate();
  if (cartItems.length === 0) {
    return (
      <div className="w-full min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything yet
            </p>
            <button
              onClick={() => navigate("/")}
              className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-2xl font-semibold mb-8">Shopping Cart</h1>
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                product={item}
                onUpdateQuantity={(change) => updateQuantity(index, change)}
                onRemove={() => removeItem(index)}
              />
            ))}
          </div>
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-black text-white mt-6 px-6 py-3 rounded-full hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>
              <button
                onClick={() => navigate("/")}
                className="block w-full text-center mt-4 text-gray-600 hover:text-black"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
