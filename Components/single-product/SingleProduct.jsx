"use client";
import OurStoreProduct from "@/Utils/OurStoreProduct";
import { Star } from "@/Utils/Starts";
import { HeartPlus } from "lucide-react";
import React, { useState, useRef } from "react";
import SingleProductLeftImge from "./SingleProductLeftImge";

const SingleProduct = () => {
  return (
    <div className="w-full flex flex-col gap-7">
      <div className="w-full flex justify-between gap-6 items-start">
        <SingleProductLeftImge />
        {/* Right side: Product details */}
        <div className="w-[50%] flex flex-col gap-3">
          <h2 className="font-semibold text-2xl text-black">
            Single product One
          </h2>
          <span className="text-base font-medium text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor.
          </span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} filled={i < 4} />
            ))}
          </div>

          <h3 className="text-3xl font-semibold text-red-800">₹ 200 /-</h3>
          <span className="px-2 py-1 bg-[#e0fade] text-[#179958] w-[120px] flex justify-center items-center text-sm font-semibold">
            484 in Stock
          </span>

          <div className="w-full flex gap-7 mt-3">
            <div className="flex items-center gap-4">
              <span className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gray-100 text-lg font-semibold cursor-pointer select-none">
                -
              </span>
              <span className="text-lg font-semibold text-black">1</span>
              <span className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gray-100 text-lg font-semibold cursor-pointer select-none">
                +
              </span>
            </div>
            <button className="px-4 py-2 bg-[#179958] rounded-4xl text-white font-semibold">
              Add to Cart
            </button>
          </div>

          <div className="flex items-center gap-3">
            <HeartPlus color="gray" />
            <span className="text-gray-800">Add to Wishlist</span>
          </div>

          <span className="text-sm font-normal text-gray-700">
            <span className="text-gray-500">Categories:</span> Applesauce Beef
            Beverages Frozen Desserts Frozen Foods Frozen Potatoes
          </span>

          <div className="w-full flex gap-1.5">
            <span className="w-[120px] h-[150px] border border-gray-200"></span>
          </div>
        </div>
      </div>

      <OurStoreProduct />
    </div>
  );
};

export default SingleProduct;
