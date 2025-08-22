import CartLayout from "@/Components/Checkout/CartLayout";
import { BestSellers } from "@/Components/Home/BestSellers";
import FoodSlider from "@/Components/Home/FoodSlider";
import { HomeColorCard } from "@/Components/Home/HomeColorCard";
import { HomeFirstAd } from "@/Components/Home/HomeFirstAd";
import { HomeTwoCard } from "@/Components/Home/HomeTwoCard";
import { PopularCategories } from "@/Components/Home/PopularCategories";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-4">
      <FoodSlider />
      <div className="w-full flex flex-col gap-10 px-[clamp(1rem,6vw,5rem)] py-2 mt-8 md:mt-14">
        <HomeFirstAd />
        <BestSellers />
        <HomeColorCard />
        <BestSellers />
        <HomeTwoCard />
        <PopularCategories />
        <CartLayout />
      </div>
    </div>
  );
}
