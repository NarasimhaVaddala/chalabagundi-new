import React from "react";

export default function QuantityButtons({
  onDecrement,
  onIncrement,
  qty = 0,
  price,
}) {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <button
        className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-100 text-lg font-semibold cursor-pointer select-none"
        onClick={(e) => {
          e.stopPropagation();
          onDecrement();
        }}
      >
        -
      </button>
      <span className="text-lg font-medium text-black">{qty}</span>
      <button
        className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-100 text-lg font-semibold cursor-pointer select-none"
        onClick={(e) => {
          e.stopPropagation();
          onIncrement();
        }}
      >
        +
      </button>
      <h3 className="text-base font-semibold text-[#579991]">
        ₹ {parseFloat(qty) * parseFloat(price)}/-
      </h3>
    </div>
  );
}
