import React from "react";
import { Product } from "../types/type";
import { addItemToCart } from "../../utils/CartUtil";
interface ProductCardProps {
  product: Product;
}
export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-w-1 aspect-h-1 mb-4 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="w-full bg-white text-black py-2 rounded-full hover:bg-gray-100 transition"
            onClick={() => {
              addItemToCart({
                _id: product._id,
                name: product.name,
                price: product.price,
                image: product.image,
                size: "sm",
                quantity: 1,
              });
            }}
          >
            Add To Cart
          </button>
          {/* <button className="w-full bg-white text-black py-2 rounded-full hover:bg-gray-100 transition">
            Quick View
          </button> */}
        </div>
      </div>
      <h3 className="font-medium text-lg">{product.name}</h3>
      <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
      {/* <div className="flex gap-2">
        {product.colors.map((color) => (
          <div
            key={color}
            className="w-4 h-4 rounded-full border border-gray-300"
            style={{
              backgroundColor: color,
            }}
          />
        ))}
      </div> */}
    </div>
  );
};
