"use client";
import { addToCart, removeFromCart } from "@/Store/slice/cartSlice";
import { removeFromWishlist } from "@/Store/slice/wishlistSlice";
import { Star } from "@/Utils/Starts";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const WishlistItem = ({ wish }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Check if this wish item is already in the cart
  const isInCart = cartItems.some(
    (item) => item.name === wish.name && item.category === wish.category
  );

  const handleRemoveWishList = () => {
    dispatch(removeFromWishlist({ name: wish.name, category: wish.category }));
  };

  const handleToggleCart = () => {
    if (isInCart) {
      dispatch(removeFromCart({ name: wish.name, category: wish.category }));
    } else {
      dispatch(addToCart({ ...wish, quantity: 1 }));
    }
  };

  return (
    <div className="flex gap-2 md:gap-4 items-start w-full md:w-[500px] shadow rounded-md overflow-hidden">
      <span className="w-20 md:w-[150px] h-full md:h-[150px] shadow">
        <img
          src={wish?.image?.[0]}
          alt={wish?.name}
          className="w-full h-full object-cover"
        />
      </span>
      <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 w-[calc(100%-80px)] md:w-[calc(100%-150px)]">
        <h2 className="text-sm md:text-base font-semibold line-clamp-1">
          {wish?.name}
        </h2>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} filled={i < wish.rating} />
          ))}
        </div>
        <h3 className="text-base font-semibold text-red-800">
          {wish?.price} /-
        </h3>
        <div className="w-full flex  justify-between items-center gap-2 md:gap-3">
          <button
            onClick={handleRemoveWishList}
            className="text-[12px] font-normal text-red-800 cursor-pointer"
          >
            Remove Wishlist
          </button>
          <button
            onClick={handleToggleCart}
            className={`px-2 md:px-3 py-0.5 md:py-1.5 text-[12px] md:text-base rounded-2xl text-white font-semibold cursor-pointer ${
              isInCart ? "bg-red-500" : "bg-[#184d46]"
            }`}
          >
            {isInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
