"use client";
import { parsePrice } from "@/Hooks/SingleItem/SingleProductAddCard";
import { decrementQty, incrementQty } from "@/Store/slice/cartSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function QuantityButtons({ cartItem }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const pricePerItem = parsePrice(cartItem?.price || "₹ 0");

  const increment = () => {
    if (cartItem)
      dispatch(
        incrementQty({ name: cartItem.name, category: cartItem.category })
      );
    setQuantity((q) => (q < 50 ? q + 1 : q));
  };

  const decrement = () => {
    if (cartItem && cartItem.quantity > 1)
      dispatch(
        decrementQty({ name: cartItem.name, category: cartItem.category })
      );
    setQuantity((q) => (q > 1 ? q - 1 : q));
  };

  const totalPrice = pricePerItem * quantity;

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <button
        onClick={decrement}
        className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-100 text-lg font-semibold cursor-pointer select-none"
      >
        -
      </button>
      <span className="text-lg font-medium text-black">{quantity}</span>
      <button
        onClick={increment}
        className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-100 text-lg font-semibold cursor-pointer select-none"
      >
        +
      </button>
      <h3 className="text-base font-semibold text-[#579991]">
        ₹ {totalPrice} /-
      </h3>
    </div>
  );
}
