import { CartItem } from "../src/types/type";

export const addItemToCart = (cartItem: CartItem) => {
  let items = localStorage.getItem("cart");
  let cartItems: CartItem[] = [];
  if (items) {
    cartItems = JSON.parse(items);
  }
  cartItems.push(cartItem);

  localStorage.setItem("cart", JSON.stringify(cartItems));
  console.log("hereerreer");
};

export const updateCartItems = (cartItems: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};
