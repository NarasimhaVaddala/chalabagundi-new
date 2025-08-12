import React from "react";

const CardItem = () => {
  return (
    <div className="w-full flex items-start gap-5 shadow rounded-md overflow-hidden">
      <span className="w-[150px] h-[150px] shadow"></span>
      <div className="flex flex-col justify-between gap-1 p-2 h-[150px] w-[calc(100%-150px)] ">
        <div>
          <h2 className="text-base font-semibold">Product Name</h2>
          <span className="text-sm font-medium text-gray-800 line-clamp-3">
            Applesauce Beef Beverages Frozen Desserts Frozen Foods Frozen
            PotatoesApplesauce Beef Beverages Frozen Desserts Frozen Foods
            Frozen PotatoesApplesauce Beef Beverages Frozen Desserts Frozen
            Foods Frozen Potatoes Applesauce
          </span>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-100 text-lg font-semibold cursor-pointer select-none">
              -
            </span>
            <span className="text-lg font-medium text-black">1</span>
            <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-100 text-lg font-semibold cursor-pointer select-none">
              +
            </span>
          </div>
          <h3 className="text-base font-semibold text-[#579991]">₹ 200 /-</h3>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
