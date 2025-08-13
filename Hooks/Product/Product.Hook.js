import { allProductItems } from "@/public/data/items.data";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export const useProductHook = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [isLoading, setIsLoading] = useState(false);

  const { categoryItems, subCategories } = useMemo(() => {
    if (!category) return { categoryItems: [], subCategories: {} };

    const foundCategory = allProductItems.find((catObj) =>
      Object.keys(catObj).includes(category)
    );

    if (!foundCategory) return { categoryItems: [], subCategories: {} };

    const subCategories = foundCategory[category];
    console.log("subCategories", subCategories);

    let mergedItems = [];

    Object.entries(subCategories).forEach(([subCatKey, itemsArray]) => {
      const updatedItems = itemsArray.map((item) => ({
        ...item,
        category: category,
        subcategory: subCatKey,
      }));
      mergedItems.push(...updatedItems);
    });

    return { categoryItems: mergedItems, subCategories };
  }, [category]);

  return {
    categoryItems,
    subCategories,
    category,
  };
};
