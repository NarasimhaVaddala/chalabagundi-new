"use client";

import DualRangeSlider from "@/Utils/DualRangeSlider";
import { ItemCard } from "@/Utils/ItemCard";
import { Star } from "@/Utils/Starts";
import React, { useRef, useState } from "react";

const ratings = [
  { stars: 5, count: 120 },
  { stars: 4, count: 80 },
  { stars: 3, count: 50 },
  { stars: 2, count: 20 },
  { stars: 1, count: 10 },
];
const FilterWrapper = () => {
  const [priceRange, setPriceRange] = useState({ min: 100, max: 1000 });
  const [selectedRating, setSelectedRating] = useState(null);

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    const name = e.target.name;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  const items = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
  }));

  return (
    <div className="w-full flex justify-between items-start gap-8">
      <div className="w-[200px] flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-[#179958]">
            Product categories
          </h3>
          <span className="text-sm text-gray-700 font-medium">Cake </span>
          <span className="text-sm text-gray-700 font-medium">Cool Cake</span>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-[#179958]">
            Filter By Price
          </h3>
          <DualRangeSlider
            min={0}
            max={2000}
            onChange={(range) => setPriceRange(range)}
          />
          <div className="flex justify-between text-sm text-gray-600 font-medium">
            <span>₹{priceRange.min}</span>
            <span>₹{priceRange.max}</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-[#179958]">
            Average Rating
          </h3>
          <div className="flex flex-col gap-2">
            {ratings.map(({ stars, count }) => (
              <button
                key={stars}
                onClick={() => setSelectedRating(stars)}
                className={`flex items-center gap-2 text-gray-700 cursor-pointer hover:text-[#179958] transition ${
                  selectedRating === stars ? "font-semibold text-[#179958]" : ""
                }`}
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} filled={i < stars} />
                  ))}
                </div>
                <span>({count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[calc(100%-200px)] flex flex-wrap ">
        {items.map((item) => (
          <ItemCard key={item.id} name={item.name} isAvailableDis={false} />
        ))}
      </div>
    </div>
  );
};

export default FilterWrapper;
