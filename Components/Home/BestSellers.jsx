"use client";
import { useEffect, useRef, useState } from "react";
import { ItemCard } from "@/Utils/ItemCard";
import { ChevronLeft, ChevronRight, Loader } from "lucide-react";
import TitleWithArrow from "@/Utils/TitleWithArrow";
import { allProductItems } from "@/public/data/items.data";
import { useHomeBestSellerHook } from "@/Hooks/HomeBestSeller.Hook";
import LoaderUi from "@/Utils/Loader";
import { useSelector } from "react-redux";

export const BestSellers = ({
  title = "Best Sellers",
  description = "Add bestselling products to weekly line up",
  isAvailableDis = false,
}) => {
  const {
    items,
    scroll,
    scrollRef,
    handleItemClick,
    handleWishlistAdded,
    isLoading,
    isItemInWishlist,
  } = useHomeBestSellerHook();

  return (
    <div className="w-full flex flex-col gap-4 mt-3 relative">
      <TitleWithArrow
        title={title}
        description={description}
        onScrollLeft={() => scroll("left")}
        onScrollRight={() => scroll("right")}
      />

      {isLoading ? (
        <LoaderUi />
      ) : (
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth border-y border-gray-200"
        >
          {items?.map((item, idx) => (
            <ItemCard
              key={idx}
              name={item.name}
              previewItem={() =>
                handleItemClick(item._category, item._subcategory, item)
              }
              toggleWishlist={() =>
                handleWishlistAdded(item._category, item._subcategory, item)
              }
              image={item?.image?.[0]}
              isAvailableDis={isAvailableDis}
              rating={item?.rating}
              price={item?.price}
              description={item?.description}
              isInWishlist={isItemInWishlist(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
