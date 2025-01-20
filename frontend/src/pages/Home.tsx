import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ChevronRight } from "lucide-react";
export function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <div className="relative w-full h-[70vh] bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold mb-4">Summer Collection 2023</h2>
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      {/* Rest of the home page content... */}
      {/* Categories section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="relative group cursor-pointer">
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-200" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-medium">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Products section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">New Arrivals</h2>
            <button className="flex items-center text-gray-600 hover:text-black">
              View All <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.name} className="group">
                <div className="aspect-w-1 aspect-h-1 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Newsletter section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get updates on our latest collections and exclusive offers
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-r-0 focus:outline-none"
            />
            <button className="px-6 py-2 bg-black text-white hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const categories = [
  {
    name: "Women's Collection",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
  {
    name: "Men's Collection",
    image:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80",
  },
];
const products = [
  {
    name: "Cotton Blend T-Shirt",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    name: "Slim Fit Jeans",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    name: "Classic White Sneakers",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
  },
  {
    name: "Leather Crossbody Bag",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
];
