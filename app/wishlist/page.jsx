"use client";
import CartLayout from "@/Components/Checkout/CartLayout";
import EmptyComponent from "@/Components/wishlist/EmptyComponent";
import WishlistItem from "@/Components/wishlist/WishlistItem";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <div className="w-full flex flex-col gap-10 px-[clamp(1rem,6vw,5rem)] py-2 mt-7">
      {wishlistItems.length > 0 ? (
        <div className="w-full flex flex-wrap gap-4 md:gap-8">
          {wishlistItems?.map((wish, index) => (
            <WishlistItem wish={wish} key={index} />
          ))}
        </div>
      ) : (
        <EmptyComponent />
      )}

      <CartLayout />
    </div>
  );
};

export default page;
