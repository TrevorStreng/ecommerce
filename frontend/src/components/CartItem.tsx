import React from "react";
import { Minus, Plus, X } from "lucide-react";
import { CartItem } from "../types/type";
interface CartItemProps {
  product: CartItem;
  onUpdateQuantity: (change: number) => void;
  onRemove: () => void;
}
export const CartItemCard = ({
  product,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) => {
  return (
    <div className="flex items-center py-6 border-b">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1 ml-4">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium">{product.name}</h3>
            {product.size && (
              <p className="text-sm text-gray-500">Size: {product.size}</p>
            )}
          </div>
          <button
            onClick={onRemove}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center border rounded">
            <button
              onClick={() => onUpdateQuantity(-1)}
              className="p-2 hover:bg-gray-50"
              disabled={product.quantity <= 1}
            >
              <Minus size={16} />
            </button>
            <span className="px-4 py-2 border-x">{product.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(1)}
              className="p-2 hover:bg-gray-50"
            >
              <Plus size={16} />
            </button>
          </div>
          <p className="font-medium">
            ${(product.price * product.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};
