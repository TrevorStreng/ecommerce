import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { ProductCard } from "../components/productCard";
import { Product } from "../types/type";
import { Filter } from "../components/Filter";

export const Womens = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSort, setSelectedSort] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Set<string>>(
    new Set(["shirt", "pants"])
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory((prev) => {
      const newSelectedCategory = new Set(prev);
      if (newSelectedCategory.has(category)) {
        newSelectedCategory.delete(category); // Unselect the category if already selected
      } else {
        newSelectedCategory.add(category); // Select the category if not selected
      }
      return newSelectedCategory;
    });
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/products?gender=female"
        );
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);

  // Filter products based on selectedCategory
  useEffect(() => {
    const filtered = products.filter((product) =>
      selectedCategory.has(product.category)
    );
    setFilteredProducts(filtered);
  }, [products, selectedCategory]);

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Womens</h1>
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
          <Filter
            onCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
