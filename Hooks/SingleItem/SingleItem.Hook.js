import { allProductItems } from "@/public/data/items.data";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useSingleItemHook = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const category = params.category;
  const subcategory = searchParams.get("subcategory");
  const name = searchParams.get("name");

  const [singleItem, setSingleItem] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (!category || !subcategory || !name) {
      setSingleItem(null);
      setLoading(false);
      return;
    }
    const categoryObj = allProductItems.find((obj) =>
      obj.hasOwnProperty(category)
    );

    if (!categoryObj) {
      setSingleItem(null);
      setLoading(false);
      return;
    }

    const subCategoryArray = categoryObj[category][subcategory];

    if (!subCategoryArray || !Array.isArray(subCategoryArray)) {
      setSingleItem(null);
      setLoading(false);
      return;
    }
    const foundItem = subCategoryArray.find((item) => item.name === name);

    const filteredRelatedProducts = subCategoryArray.filter(
      (item) => item.name !== name
    );

    setRelatedProduct(filteredRelatedProducts);
    setSingleItem(foundItem || null);
    setLoading(false);
  }, [category, subcategory, name]);

  return {
    category,
    subcategory,
    singleItem,
    loading,
    relatedProduct,
  };
};
