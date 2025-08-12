"use client";
import { ItemCard } from "@/Utils/ItemCard";
import TitleWithArrow from "@/Utils/TitleWithArrow";
import { useRef } from "react";

const RelatedProduct = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // pixels per click
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const items = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
  }));
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
        {items.map((item) => (
          <ItemCard key={item.id} name={item.name} isAvailableDis={false} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
