import { BestSellers } from "@/Components/Home/BestSellers";
import FoodSlider from "@/Components/Home/FoodSlider";
import { HomeColorCard } from "@/Components/Home/HomeColorCard";
import { HomeFirstAd } from "@/Components/Home/HomeFirstAd";
import { HomeTwoCard } from "@/Components/Home/HomeTwoCard";
import { PopularCategories } from "@/Components/Home/PopularCategories";
import { allProductItems } from "@/public/data/items.data";
import Image from "next/image";

export default function Home() {
  console.log("allProductItems", allProductItems);

  return (
    <div className="w-full flex flex-col gap-4">
      <FoodSlider />
      <div className="w-full flex flex-col gap-10 px-[clamp(1rem,6vw,5rem)] py-2 mt-14">
        <HomeFirstAd />
        <BestSellers />
        <HomeColorCard />
        <BestSellers />
        <HomeTwoCard />
        <PopularCategories />
      </div>
    </div>
  );
}
