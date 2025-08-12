import { BestSellers } from "@/Components/Home/BestSellers";
import { HomeFirstAd } from "@/Components/Home/HomeFirstAd";
import { NewlyArrivedItems } from "@/Components/Tiffins/NewlyArrivedItems";
import TiffinGrid from "@/Components/Tiffins/TiffinGrid";
import TiffinsFirstSwipper from "@/Components/Tiffins/TiffinsFirstSwipper";
import VegItems from "@/Components/Tiffins/VegItems";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-10 px-[clamp(1rem,6vw,5rem)] py-2 mt-7">
      <TiffinsFirstSwipper />
      <TiffinGrid />
      <BestSellers
        title="Super Deals Of The Week"
        description="Dont miss this opportunity at a special discount just for this week"
        isAvailableDis={true}
      />
      <VegItems />
      <HomeFirstAd />
      <VegItems />

      <NewlyArrivedItems />
    </div>
  );
};

export default page;
