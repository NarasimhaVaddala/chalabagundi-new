"use client";
import FilterItemFirstCard from "@/Components/filter-items/FilterItemFirstCard";
import RelatedProduct from "@/Components/single-product/RelatedProduct";
import SingleProduct from "@/Components/single-product/SingleProduct";
import { useSingleItemHook } from "@/Hooks/SingleItem/SingleItem.Hook";

import React from "react";

const page = () => {
  const { category, subcategory, singleItem, loading, relatedProduct } =
    useSingleItemHook();

  return (
    <div className="w-full flex flex-col gap-4">
      <FilterItemFirstCard
        name={singleItem?.name}
        image={singleItem?.image?.[singleItem.image.length - 1]}
      />
      <div className="w-full flex flex-col gap-10 px-[clamp(1rem,6vw,5rem)] py-2 mt-7">
        {loading ? (
          <LoaderUi />
        ) : (
          <>
            <SingleProduct
              category={category}
              subcategory={subcategory}
              singleItem={singleItem}
            />
            <RelatedProduct
              category={category}
              subcategory={subcategory}
              relatedProduct={relatedProduct}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default page;
