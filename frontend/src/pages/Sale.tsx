import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { ProductCard } from "../components/productCard";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { Product } from "../types/type";
import axios from "axios";

export const Sale = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSort, setSelectedSort] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await axios.get(
          "http://localhost:3000/api/products?sale=true"
        );
        setProducts(data.data.products);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Shirts</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-gray-600 hover:text-black"
            >
              <SlidersHorizontal size={20} />
              Filters
            </button>
            <div className="relative">
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="appearance-none bg-white border rounded-lg px-4 py-2 pr-8 cursor-pointer focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:block ${showFilters ? "block" : "hidden"}`}>
            <div className="space-y-6">
              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              {/* Colors */}
              <div>
                <h3 className="font-medium mb-4">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {["#000000", "#FFFFFF", "#808080", "#4169E1", "#F5F5DC"].map(
                    (color) => (
                      <button
                        key={color}
                        onClick={() => {
                          if (selectedColors.includes(color)) {
                            setSelectedColors(
                              selectedColors.filter((c) => c !== color)
                            );
                          } else {
                            setSelectedColors([...selectedColors, color]);
                          }
                        }}
                        className={`w-8 h-8 rounded-full border ${
                          selectedColors.includes(color)
                            ? "ring-2 ring-black ring-offset-2"
                            : "border-gray-300"
                        }`}
                        style={{
                          backgroundColor: color,
                        }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
