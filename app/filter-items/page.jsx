"use client";
import { Suspense } from "react";
import FilterItemFirstCard from "@/Components/filter-items/FilterItemFirstCard";
import FilterWrapper from "@/Components/filter-items/FilterWrapper";
import { useFilterCardHook } from "@/Hooks/filter-card/filterCard.hook";
import CartLayout from "@/Components/Checkout/CartLayout";

const FilterPageContent = () => {
  const {
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
  } = useFilterCardHook();

  console.log("categoryItems", categoryItems);

  return (
    <div className="w-full flex flex-col gap-4">
      <FilterItemFirstCard
        name={
          categoryItems?.[0]?.category?.slice(0, 1)?.toUpperCase() +
          categoryItems?.[0]?.category?.slice(1)
        }
        image={categoryItems?.[0]?.image?.[0]}
      />
      <div className="w-full flex flex-col gap-10 px-[clamp(1rem,4vw,4rem)] py-2 mt-7">
        <FilterWrapper
          subCategoryTypes={subCategoryTypes}
          categoryItems={categoryItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          setActiveSubCategory={setActiveSubCategory}
          setActiveType={setActiveType}
          activeType={activeType}
          activeSubCategory={activeSubCategory}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
        />
      </div>
      <CartLayout />
    </div>
  );
};

const FilterLoadingFallback = () => (
  <div className="w-full flex flex-col gap-4">
    {/* Header skeleton */}
    <div className="animate-pulse">
      <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
    </div>

    {/* Content skeleton */}
    <div className="w-full flex flex-col gap-10 px-[clamp(1rem,4vw,4rem)] py-2 mt-7">
      <div className="animate-pulse">
        {/* Filter controls skeleton */}
        <div className="flex gap-4 mb-6">
          <div className="h-10 w-32 bg-gray-200 rounded"></div>
          <div className="h-10 w-32 bg-gray-200 rounded"></div>
          <div className="h-10 w-32 bg-gray-200 rounded"></div>
        </div>

        {/* Items grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="h-64 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Page = () => {
  return (
    <Suspense fallback={<FilterLoadingFallback />}>
      <FilterPageContent />
    </Suspense>
  );
};

export default Page;
