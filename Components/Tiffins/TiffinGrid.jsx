"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TiffinGrid({ items = [] }) {
  const router = useRouter();
  const uniqueTypeItems = Object.values(
    items.reduce((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = item;
      }
      return acc;
    }, {})
  );

  const handleShopClick = (category, subcat) => {
    router.push(
      `/filter-items?category=${encodeURIComponent(
        category
      )}&subcategory=${encodeURIComponent(subcat)}`
    );
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap w-full gap-2">
        {uniqueTypeItems.map(({ type, image, category, subcategory }, idx) => {
          const imgSrcRaw = Array.isArray(image) ? image[0] : image;
          let imgSrc = imgSrcRaw;

          // Fix for missing leading slash on local images
          if (imgSrc && !imgSrc.startsWith("http") && !imgSrc.startsWith("/")) {
            imgSrc = "/" + imgSrc;
          }

          // Fallback if empty
          if (!imgSrc) {
            imgSrc = "/placeholder.jpg";
          }

          return (
            <div
              onClick={() => handleShopClick(category, subcategory)}
              key={idx}
              className="w-full md:w-1/4 h-[140px] flex items-center justify-between p-4 border border-gray-300 bg-white hover:border-gray-700 transition-colors cursor-pointer"
            >
              <h3 className="text-base font-semibold text-gray-800">{type}</h3>

              <div className="w-[100px] h-[100px] rounded-full bg-[#f2e7e6] flex items-center justify-center overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={type || "No Image"}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
