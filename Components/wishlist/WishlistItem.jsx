import { Star } from "@/Utils/Starts";
import React from "react";

const WishlistItem = () => {
  return (
    <div className=" flex gap-4 items-start w-full md:w-[500px] shadow rounded-md overflow-hidden">
      <span className="w-[150px] h-[150px] shadow"></span>
      <div className="flex flex-col gap-1 p-2 w-[calc(100%-150px)] ">
        <h2 className="text-base font-semibold">Product Name</h2>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} filled={i < 4} />
          ))}
        </div>
        <h3 className="text-base font-semibold text-red-800">₹ 200 /-</h3>
        <div className="w-full flex items-center gap-9">
          <button className="text-sm font-normal text-red-800 cursor-pointer">
            Remove Item
          </button>
          <button className="px-3 py-1.5 rounded-2xl text-white font-semibold bg-[#184d46] cursor-pointer">
            Add Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
