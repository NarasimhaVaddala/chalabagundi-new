"use client";
import OurStoreProduct from "@/Utils/OurStoreProduct";
import { Star } from "@/Utils/Starts";
import { HeartPlus } from "lucide-react";
import React from "react";
import SingleProductLeftImge from "./SingleProductLeftImge";
import { useSingleProductAddCardHook } from "@/Hooks/SingleItem/SingleProductAddCard";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/Store/slice/cartSlice";
import { addToWishlist, removeFromWishlist } from "@/Store/slice/wishlistSlice";

const SingleProduct = ({ singleItem, category, subcategory }) => {
  const dispatch = useDispatch();

  const {
    quantity,
    increment,
    decrement,
    totalPrice,
    displayImg,
    setDisplayImg,
  } = useSingleProductAddCardHook({ singleItem, category, subcategory });

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.items);

  // Check if already in cart or wishlist
  const isInCart = cartItems.some(
    (item) => item.name === singleItem.name && item.category === category
  );
  const isInWishlist = wishlistItems.some(
    (item) => item.name === singleItem.name && item.category === category
  );

  // Toggle Cart
  const handleToggleCart = () => {
    if (isInCart) {
      dispatch(
        removeFromCart({ name: singleItem.name, category: singleItem.category })
      );
    } else {
      dispatch(addToCart({ ...singleItem, category, subcategory, quantity }));
    }
  };

  // Toggle Wishlist
  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch(
        removeFromWishlist({
          name: singleItem.name,
          category: singleItem.category,
        })
      );
    } else {
      dispatch(addToWishlist({ ...singleItem, category, subcategory }));
    }
  };

  return (
    <div className="w-full flex flex-col gap-7">
      <div className="w-full flex flex-col md:flex-row justify-between gap-6 items-start">
        <SingleProductLeftImge image={displayImg ?? singleItem?.image?.[0]} />
        <div className="w-full md:w-[50%] flex flex-col gap-3">
          <h2 className="font-semibold text-2xl text-black">
            {singleItem?.name}
          </h2>
          <span className="text-base font-medium text-gray-600">
            {singleItem?.description}
          </span>

          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} filled={i < singleItem?.rating} />
            ))}
          </div>

          <h3 className="text-3xl font-semibold text-red-800">
            ₹ {totalPrice} /-
          </h3>

          <span className="px-2 py-1 bg-[#e0fade] text-[#179958] w-[120px] flex justify-center items-center text-sm font-semibold">
            484 in Stock
          </span>

          <div className="w-full flex gap-7 mt-3">
            <div className="flex items-center gap-4">
              <button
                onClick={decrement}
                className="cursor-pointer w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gray-100 text-lg font-semibold"
              >
                -
              </button>
              <span className="text-lg font-semibold text-black">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="cursor-pointer w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gray-100 text-lg font-semibold"
              >
                +
              </button>
            </div>

            <button
              onClick={handleToggleCart}
              className={`cursor-pointer px-4 py-2 rounded-4xl text-white font-semibold ${
                isInCart ? "bg-red-500" : "bg-[#179958]"
              }`}
            >
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>

          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleToggleWishlist}
          >
            <HeartPlus color={isInWishlist ? "red" : "gray"} />
            <span className="text-gray-800">
              {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </span>
          </div>

          <span className="text-sm font-normal text-gray-700">
            <span className="text-gray-500">Categories:</span>{" "}
            {singleItem?.main_ingredient}
          </span>

          <div className="w-full flex flex-wrap items-center gap-1.5">
            {singleItem?.image?.slice(0, 4)?.map((img, index) => (
              <span
                onClick={() => setDisplayImg(img)}
                key={index}
                className="cursor-pointer w-[120px] h-[150px] border border-gray-200"
              >
                <img
                  src={img}
                  className="w-full h-full"
                  alt={`${singleItem.name} image ${index + 2}`}
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      <OurStoreProduct />
    </div>
  );
};

export default SingleProduct;
