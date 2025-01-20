import React from "react";
import { Search, ShoppingBag, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              className="text-xl font-semibold cursor-pointer"
              // onClick={() => navigate("/")}
              to="/"
            >
              FASHION
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-8">
              <Link
                to="/Mens"
                className="hover:text-gray-600"
                // onClick={() => navigate("/tops")}
              >
                Mens
              </Link>
              <Link
                to="/Womens"
                className="hover:text-gray-600"
                // onClick={() => navigate("/bottoms")}
              >
                Womens
              </Link>
              <Link
                to="/sale"
                className="hover:text-gray-600"
                // onClick={() => navigate("/sale")}
              >
                Sale
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-gray-600">
              <Search size={20} />
            </button>
            <button className="p-2 hover:text-gray-600">
              <User size={20} />
            </button>
            <Link className="p-2 hover:text-gray-600" to="/cart">
              <ShoppingBag size={20} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
