"use client";
import { ItemCard } from "@/Utils/ItemCard";
import TitleWithArrow from "@/Utils/TitleWithArrow";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const RelatedProduct = ({ relatedProduct, subcategory, category }) => {
  const scrollRef = useRef(null);
  const router = useRouter();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // pixels per click
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleItemClick = (category, subcategory, item) => {
    const query = new URLSearchParams({
      subcategory,
      name: item.name,
      // add more if you want
    }).toString();
    router.push(`/${category}?${query}`);
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <TitleWithArrow
        title={"Related Products"}
        description={""}
        onScrollLeft={() => scroll("left")}
        onScrollRight={() => scroll("right")}
      />
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth border-y border-gray-200"
      >
        {relatedProduct?.map((item) => (
          <ItemCard
            key={item.name}
            name={item.name}
            isAvailableDis={false}
            image={item?.image?.[0]}
            rating={item?.rating}
            price={item?.price}
            description={item?.description}
            previewItem={() => handleItemClick(category, subcategory, item)}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
