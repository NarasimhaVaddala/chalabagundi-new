import FilterItemFirstCard from "@/Components/filter-items/FilterItemFirstCard";
import RelatedProduct from "@/Components/single-product/RelatedProduct";
import SingleProduct from "@/Components/single-product/SingleProduct";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <FilterItemFirstCard />
      <div className="w-full flex flex-col gap-10 px-[clamp(1rem,6vw,5rem)] py-2 mt-7">
        <SingleProduct />
        <RelatedProduct />
      </div>
    </div>
  );
};

export default page;
