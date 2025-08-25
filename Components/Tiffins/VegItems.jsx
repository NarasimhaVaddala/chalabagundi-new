"use client";
import { addToWishlist, removeFromWishlist } from "@/Store/slice/wishlistSlice";
import { ItemCard } from "@/Utils/ItemCard";
import TitleWithArrow from "@/Utils/TitleWithArrow";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const VegItems = ({ items, subCat, category }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const scrollRef = useRef(null);

  const wishlistItems = useSelector((state) => state.wishlist.items);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // pixels per click
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleItemClick = (item) => {
    const query = new URLSearchParams({
      subcategory: subCat,
      name: item.name,
    }).toString();
    router.push(`/${category}?${query}`);
  };

  const handleWishlistAdded = (item) => {
    const exists = wishlistItems.some((w) => {
      return w.name === item.name && w.category === category;
    });

    exists
      ? dispatch(removeFromWishlist({ name: item.name, category: category }))
      : dispatch(addToWishlist({ ...item, category, subcategory: subCat }));
  };

  const isItemInWishlist = (item) =>
    wishlistItems.some((w) => w.name === item.name && w.category === category);

  return (
    <div className="w-full flex flex-col gap-4 mt-3 relative">
      <TitleWithArrow
        title={`${
          category?.slice(0, 1)?.toUpperCase() +
          category?.slice(1)?.toLowerCase()
        } & ${subCat}`}
        description={items?.[0]?.description}
        onScrollLeft={() => scroll("left")}
        onScrollRight={() => scroll("right")}
      />
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth border-y border-gray-200"
      >
        {/* First item: Big image */}
        <div className="flex-shrink-0 w-[230px] h-[330px] mr-4">
          <img
            src={items?.[0]?.image?.[0]}
            alt="Featured"
            className="w-full h-full object-cover "
            draggable={false}
          />
        </div>

        {items?.slice(1).map((item) => (
          <ItemCard
            item={item}
            category={category}
            subcategory={subCat}
            previewItem={() => handleItemClick(item)}
            toggleWishlist={() => handleWishlistAdded(item)}
            isInWishlist={isItemInWishlist(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default VegItems;
