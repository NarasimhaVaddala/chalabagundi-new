"use client";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "@/Store/slice/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";

const CardItem = ({ item }) => {
  const dispatch = useDispatch();
  // console.log("item", item);

  return (
    <div className="w-full h-[165px] md:h-[150px] flex items-start gap-5 shadow rounded-md overflow-hidden">
      {/* Product Image */}
      <span className="w-[150px] h-full shadow overflow-hidden flex items-center justify-center bg-white">
        <img
          src={item?.image?.[0]}
          alt={item?.name}
          className="w-full h-full object-cover"
        />
      </span>

      {/* Product Info */}
      <div className="flex flex-col justify-between gap-1 p-2 h-full w-[calc(100%-150px)]">
        <div>
          <h2 className="text-base font-semibold">{item?.name}</h2>
          <span className="text-sm font-medium text-gray-800 line-clamp-3">
            {item?.description}
          </span>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-1">
          <div className="flex items-center gap-4">
            <span
              className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-100 text-lg font-semibold cursor-pointer select-none"
              onClick={() =>
                dispatch(
                  decrementQty({ name: item.name, category: item.category })
                )
              }
            >
              -
            </span>
            <span className="text-lg font-medium text-black">
              {item.quantity}
            </span>
            <span
              className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-100 text-lg font-semibold cursor-pointer select-none"
              onClick={() =>
                dispatch(
                  incrementQty({ name: item.name, category: item.category })
                )
              }
            >
              +
            </span>
            <h3 className="text-base font-semibold text-[#579991]">
              ₹{" "}
              {parseInt(item?.price?.replace(/[^0-9]/g, ""), 10) *
                Number(item?.quantity)}{" "}
              /-
            </h3>
          </div>

          {/* Remove Button */}
          <button
            onClick={() =>
              dispatch(
                removeFromCart({ name: item.name, category: item.category })
              )
            }
            className="bg-red-400 px-2 py-1 rounded-2xl cursor-pointer text-white"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
