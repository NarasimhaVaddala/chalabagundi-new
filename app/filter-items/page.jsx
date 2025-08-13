"use client";
import FilterItemFirstCard from "@/Components/filter-items/FilterItemFirstCard";
import FilterWrapper from "@/Components/filter-items/FilterWrapper";
import { useFilterCardHook } from "@/Hooks/filter-card/filterCard.hook";

const Page = () => {
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

  return (
    <div className="w-full flex flex-col gap-4">
      <FilterItemFirstCard />
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
    </div>
  );
};

export default Page;
