"use client";
import DualRangeSlider from "@/Utils/DualRangeSlider";
import { Star } from "@/Utils/Starts";
import React, { useState } from "react";

const ratings = [
  { stars: 5, count: 120 },
  { stars: 4, count: 80 },
  { stars: 3, count: 50 },
  { stars: 2, count: 20 },
  { stars: 1, count: 10 },
];

const FilterLeftSideUi = ({
  subCategoryTypes,
  setActiveSubCategory,
  setActiveType,
  activeType,
  activeSubCategory,
  selectedRating,
  setSelectedRating,

  setPriceRange,
  priceRange,
}) => {
  return (
    <div className="w-full  md:w-[200px]  flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-[#179958]">
          Product categories
        </h3>
        <span
          onClick={() => {
            setActiveSubCategory("all");
            setActiveType("all");
          }}
          className={`text-base font-medium capitalize cursor-pointer transition
    ${
      activeSubCategory === "all"
        ? "text-[#179958]"
        : "text-gray-800 hover:text-[#179958]"
    }`}
        >
          All
        </span>
        {Object.entries(subCategoryTypes).map(([subCat, types]) => (
          <div key={subCat} className="mb-3">
            {/* Subcategory Title */}
            <h4
              onClick={() => {
                setActiveSubCategory(subCat);
                setActiveType("all");
              }}
              className={`text-base font-medium capitalize cursor-pointer transition
        ${
          activeSubCategory === subCat && activeType === "all"
            ? "text-[#179958]"
            : "text-gray-800 hover:text-[#179958]"
        }`}
            >
              {subCat}
            </h4>
            <div className="flex flex-col pl-3 mt-1 gap-1">
              {types.map((type) => (
                <span
                  onClick={() => {
                    setActiveSubCategory(subCat);
                    setActiveType(type);
                  }}
                  key={type}
                  className={`text-sm capitalize cursor-pointer transition
            ${
              activeSubCategory === subCat && activeType === type
                ? "text-[#179958]"
                : "text-gray-600 hover:text-[#179958]"
            }`}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-[#179958]">
          Filter By Price
        </h3>
        <DualRangeSlider
          min={0}
          max={2000}
          value={priceRange}
          onChange={setPriceRange}
        />
        <div className="flex justify-between text-sm text-gray-600 font-medium">
          <span>₹{priceRange?.min}</span>
          <span>₹{priceRange?.max}</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-[#179958]">Average Rating</h3>
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
  );
};

export default FilterLeftSideUi;
