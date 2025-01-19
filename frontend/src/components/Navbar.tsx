import React from "react";
import { Search, ShoppingBag, User } from "lucide-react";
export const Navbar = () => {
  return (
    <nav className="w-full border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold">FASHION</h1>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-8">
              <a href="#" className="hover:text-gray-600">
                Women
              </a>
              <a href="#" className="hover:text-gray-600">
                Men
              </a>
              <a href="#" className="hover:text-gray-600">
                Accessories
              </a>
              <a href="#" className="hover:text-gray-600">
                Sale
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-gray-600">
              <Search size={20} />
            </button>
            <button className="p-2 hover:text-gray-600">
              <User size={20} />
            </button>
            <button className="p-2 hover:text-gray-600">
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
