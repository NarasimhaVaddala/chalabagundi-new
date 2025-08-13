"use client";
import { allProductItems } from "@/public/data/items.data";
import { useSearchParams } from "next/navigation";
import { useState, useMemo } from "react";

export const useFilterCardHook = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [subCategoryTypes, setSubCategoryTypes] = useState({});
  const [activeSubCategory, setActiveSubCategory] = useState("all");
  const [activeType, setActiveType] = useState("all");
  const [selectedRating, setSelectedRating] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });

  const itemsPerPage = 8;

  const categoryItems = useMemo(() => {
    if (!category) return [];
    const foundCategory = allProductItems.find((catObj) =>
      Object.keys(catObj).includes(category)
    );
    if (!foundCategory) return [];

    const subCategories = foundCategory[category];
    let mergedItems = [];
    let subCategoryMap = {};

    Object.entries(subCategories).forEach(([subCatKey, itemsArray]) => {
      const updatedItems = itemsArray.map((item) => ({
        ...item,
        category: category,
        subCategory: subCatKey,
      }));
      mergedItems.push(...updatedItems);
      const uniqueTypes = [...new Set(itemsArray.map((item) => item.type))];
      subCategoryMap[subCatKey] = uniqueTypes;
    });

    setSubCategoryTypes(subCategoryMap);
    return mergedItems;
  }, [category]);

  const filteredItems = useMemo(() => {
    let filtered = categoryItems;

    if (activeSubCategory !== "all") {
      filtered = filtered.filter(
        (item) => item.subCategory === activeSubCategory
      );
    }
    if (activeType !== "all") {
      filtered = filtered.filter((item) => item.type === activeType);
    }
    if (selectedRating) {
      filtered = filtered.filter((item) => item.rating >= selectedRating);
    }
    if (priceRange) {
      filtered = filtered.filter((item) => {
        const numericPrice = parseFloat(item?.price?.replace(/[₹,]/g, "")); // Remove ₹ and commas
        return numericPrice >= priceRange.min && numericPrice <= priceRange.max;
      });
    }

    return filtered;
  }, [
    categoryItems,
    activeSubCategory,
    activeType,
    selectedRating,
    priceRange,
  ]);

  console.log("filteredItems", filteredItems);

  return {
    categoryItems: filteredItems,
    subCategoryTypes,
    currentPage,
    setCurrentPage,
    selectedFilter,
    setSelectedFilter,
    itemsPerPage,
    setActiveSubCategory,
    setActiveType,
    activeType,
    activeSubCategory,
    selectedRating,
    setSelectedRating,
    priceRange,
    setPriceRange, // pass this to slider
  };
};
