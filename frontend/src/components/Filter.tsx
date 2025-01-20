import React, { useState } from "react";

export const Filter = ({ onCategoryChange, selectedCategory }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSort, setSelectedSort] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  return (
    <div className={`lg:block ${showFilters ? "block" : "hidden"}`}>
      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <h3 className="font-medium mb-4">Category</h3>
          <div className="flex gap-4">
            <button
              onClick={() => onCategoryChange("shirt")}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory.has("shirt")
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Tops
            </button>
            <button
              onClick={() => onCategoryChange("pants")}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory.has("pants")
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Bottoms
            </button>
          </div>
        </div>
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
  );
};
