"use client";
import { useRef } from "react";
import { ItemCard } from "@/Utils/ItemCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TitleWithArrow from "@/Utils/TitleWithArrow";

export const BestSellers = ({
  title = "Best Sellers",
  description = "Add bestselling products to weekly line up",
  product,
  isAvailableDis = false,
}) => {
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
    <div className="w-full flex flex-col gap-4 mt-3 relative">
      {/* Header */}
      <TitleWithArrow
        title={title}
        description={description}
        onScrollLeft={() => scroll("left")}
        onScrollRight={() => scroll("right")}
      />

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex  overflow-x-auto scrollbar-hide scroll-smooth border-y border-gray-200"
      >
        {items.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            isAvailableDis={isAvailableDis}
          />
        ))}
      </div>
    </div>
  );
};
