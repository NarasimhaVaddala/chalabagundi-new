"use client";
import { BestSellers } from "@/Components/Home/BestSellers";
import { HomeFirstAd } from "@/Components/Home/HomeFirstAd";
import { NewlyArrivedItems } from "@/Components/Tiffins/NewlyArrivedItems";
import TiffinGrid from "@/Components/Tiffins/TiffinGrid";
import TiffinsFirstSwipper from "@/Components/Tiffins/TiffinsFirstSwipper";
import VegItems from "@/Components/Tiffins/VegItems";
import { useProductHook } from "@/Hooks/Product/Product.Hook";

const page = () => {
  const { categoryItems, subCategories, category } = useProductHook();
  const subCategoryKeys = Object.keys(subCategories || {});

  return (
    <div className="w-full flex flex-col gap-10 px-[clamp(1rem,6vw,5rem)] py-2 mt-7">
      <TiffinsFirstSwipper categoryItems={categoryItems} category={category} />
      <TiffinGrid items={categoryItems} />
      <BestSellers
        title="Super Deals Of The Week"
        description="Dont miss this opportunity at a special discount just for this week"
      />

      {subCategoryKeys.map((key, index) => (
        <div key={key}>
          <VegItems
            items={subCategories[key]}
            subCat={key}
            category={category}
          />
          {index < subCategoryKeys.length - 1 && (
            <div className="mt-10">
              <HomeFirstAd />
            </div>
          )}
        </div>
      ))}

      <NewlyArrivedItems
        subCategories={subCategories}
        subCategoryKeys={subCategoryKeys}
        category={category}
      />
    </div>
  );
};

export default page;
