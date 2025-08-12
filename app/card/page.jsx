import CardItem from "@/Components/card/CardItem";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-10 px-[clamp(1rem,6vw,5rem)] py-2 mt-7">
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <div className="w-full py-3 border-y border-gray-200 flex justify-between items-center">
        <span>Total Price</span>
        <span className="text-2xl font-semibold text-[#184d47]">₹303 /-</span>
      </div>
    </div>
  );
};

export default page;
