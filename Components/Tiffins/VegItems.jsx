"use client";
import { ItemCard } from "@/Utils/ItemCard";
import TitleWithArrow from "@/Utils/TitleWithArrow";
import React, { useRef } from "react";

const VegItems = () => {
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
        title={"Fruits & Vegetables"}
        description={
          "Buy farm fresh fruits and vegetables online at the best prices"
        }
        onScrollLeft={() => scroll("left")}
        onScrollRight={() => scroll("right")}
      />
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth border-y border-gray-200"
      >
        {/* First item: Big image */}
        <div className="flex-shrink-0 w-[230px] h-[330px] mr-4">
          <img
            src="https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=600&q=80"
            alt="Featured"
            className="w-full h-full object-cover "
            draggable={false}
          />
        </div>

        {/* Following items: ItemCards */}
        {items.map((item) => (
          <ItemCard key={item.id} name={item.name} isAvailableDis={false} />
        ))}
      </div>
    </div>
  );
};

export default VegItems;
