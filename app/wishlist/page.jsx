"use client";
import EmptyComponent from "@/Components/wishlist/EmptyComponent";
import WishlistItem from "@/Components/wishlist/WishlistItem";
import React from "react";

const page = () => {
  const wishlist = [""];
  return (
    <div className="w-full flex flex-col gap-10 px-[clamp(1rem,6vw,5rem)] py-2 mt-7">
      {wishlist.length > 0 ? (
        <div className="w-full flex flex-wrap gap-8">
          <WishlistItem />
          <WishlistItem />
          <WishlistItem />
          <WishlistItem />
          <WishlistItem />
          <WishlistItem />
        </div>
      ) : (
        <EmptyComponent />
      )}
    </div>
  );
};

export default page;
