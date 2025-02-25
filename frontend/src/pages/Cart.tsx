import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { CartItemCard } from "../components/CartItem";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../types/type";
import { updateCartItems } from "../../utils/CartUtil";

export const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const updateQuantity = (index: number, change: number) => {
    setCartItems((items) => {
      const updatedQuantity = items.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      );
      updateCartItems(updatedQuantity);
      return updatedQuantity;
    });
  };
  const removeItem = (index: number) => {
    try {
      console.log("removing item");
      setCartItems((items) => {
        const updatedCart = items.filter((_, i) => i !== index);
        updateCartItems(updatedCart);
        return updatedCart;
      });
    } catch (err) {
      console.error(err);
    }
  };
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    const getCartItems = () => {
      let cart = localStorage.getItem("cart");
      if (cart) {
        try {
          let cartItems: CartItem[] = JSON.parse(cart);
          setCartItems(cartItems);
        } catch (err) {
          console.error("Error parsing cart items.", err);
        }
      }
    };
    getCartItems();
  }, []);
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
              <CartItemCard
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
