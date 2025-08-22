import CartLayout from "@/Components/Checkout/CartLayout";
import FoodSlider from "@/Components/Home/FoodSlider";
import HowItWorkFirst from "@/Components/HowItsWork/HowItWorkFirst";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <FoodSlider />
      <div className="w-full flex flex-col gap-10 px-[clamp(1rem,6vw,5rem)] py-2 mt-14">
        <HowItWorkFirst />
      </div>

      <CartLayout />
    </div>
  );
};

export default page;
