"use client";

import DualRangeSlider from "@/Utils/DualRangeSlider";
import { ItemCard } from "@/Utils/ItemCard";
import { Star } from "@/Utils/Starts";
import React, { useRef, useState } from "react";
import FilterLeftSideUi from "./FilterLeftSideUi";
import FilterRightSideItems from "./FilterRightSideItems";

const FilterWrapper = ({
  subCategoryTypes,
  categoryItems,
  currentPage,
  setCurrentPage,
  itemsPerPage,
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
    <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8">
      <FilterLeftSideUi
        setActiveSubCategory={setActiveSubCategory}
        setActiveType={setActiveType}
        subCategoryTypes={subCategoryTypes}
        activeType={activeType}
        activeSubCategory={activeSubCategory}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        setPriceRange={setPriceRange}
        priceRange={priceRange}
      />
      <FilterRightSideItems
        categoryItems={categoryItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default FilterWrapper;
