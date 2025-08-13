"use client";
import TitleWithArrow from "@/Utils/TitleWithArrow";
import NewlyArrivedLayout from "./NewlyArrivedLayout";

export const NewlyArrivedItems = ({
  subCategoryKeys,
  category,
  subCategories,
}) => {
  return (
    <div className="w-full flex flex-col gap-4 mt-3 relative">
      {/* Header */}
      <TitleWithArrow
        title={"New Arrivals"}
        description={"Add new products to weekly line up"}
        isDisplayArrow={false}
      />
      <NewlyArrivedLayout
        subCategoryKeys={subCategoryKeys}
        category={category}
        subCategories={subCategories}
      />
    </div>
  );
};
