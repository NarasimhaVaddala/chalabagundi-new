"use client";

import { addToWishlist, removeFromWishlist } from "@/Store/slice/wishlistSlice";
import { ItemCard } from "@/Utils/ItemCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function NewlyArrivedLayout({
  subCategoryKeys,
  category,
  subCategories,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [selectedSubCat, setSelectedSubCat] = useState(null);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  // Set first key as default selected on mount
  useEffect(() => {
    if (subCategoryKeys.length > 0) {
      setSelectedSubCat(subCategoryKeys[0]);
    }
  }, [subCategories]);

  if (!selectedSubCat) return null;

  const items = subCategories?.[selectedSubCat] || [];

  // First item for main image
  const mainImageItem = items?.[0];

  // Next 2 to 7 items for grid
  const displayedItems = items?.slice(1, 8);

  const handleItemClick = (item) => {
    const query = new URLSearchParams({
      subcategory: selectedSubCat,
      name: item.name,
    }).toString();
    router.push(`/${category}?${query}`);
  };

  const handleWishlistAdded = (item) => {
    const exists = wishlistItems?.some((w) => {
      return w.name === item.name && w.category === category;
    });

    exists
      ? dispatch(removeFromWishlist({ name: item.name, category: category }))
      : dispatch(
          addToWishlist({ ...item, category, subcategory: selectedSubCat })
        );
  };

  const isItemInWishlist = (item) =>
    wishlistItems.some((w) => w.name === item.name && w.category === category);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Column 1: Subcategory List */}
        <div className="col-span-1 bg-white p-4 border border-gray-200">
          <h2 className="text-xl font-semibold mb-6">
            {category?.charAt(0).toUpperCase() + category?.slice(1)} Categories
          </h2>
          <ul className="flex flex-col gap-3 text-gray-700">
            {subCategoryKeys.map((key, i) => (
              <li
                key={i}
                onClick={() => setSelectedSubCat(key)}
                className={`cursor-pointer px-3 py-2 rounded-md transition ${
                  selectedSubCat === key
                    ? "bg-[#edecda] text-gray-900 font-semibold"
                    : "hover:bg-[#edecda] hover:text-gray-900"
                }`}
              >
                {key}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Main Image */}
        <div className=" bg-white p-4 border border-gray-200 flex flex-col">
          {mainImageItem && (
            <img
              src={
                Array.isArray(mainImageItem.image)
                  ? mainImageItem.image[0]
                  : mainImageItem.image
              }
              className="w-full"
              alt={mainImageItem.name}
            />
          )}
        </div>

        {/* Columns 3-5: Display next 2–7 items */}
        {[...Array(3)].map((_, colIdx) => (
          <div key={colIdx} className="flex flex-col space-y-0">
            {displayedItems
              .slice(colIdx * 2, colIdx * 2 + 2) // 2 items per column
              .map((item, idx) => (
                <ItemCard
                  key={idx}
                  isAvailableDis={false}
                  rating={item.rating}
                  image={Array.isArray(item.image) ? item.image[0] : item.image}
                  name={item.name}
                  price={item.price}
                  description={item?.description}
                  previewItem={() => handleItemClick(item)}
                  toggleWishlist={() => handleWishlistAdded(item)}
                  isInWishlist={isItemInWishlist(item)}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
