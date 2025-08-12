"use client";
import TitleWithArrow from "@/Utils/TitleWithArrow";
import React, { useRef } from "react";
import NewlyArrivedLayout from "./NewlyArrivedLayout";

export const NewlyArrivedItems = () => {
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
  return (
    <div className="w-full flex flex-col gap-4 mt-3 relative">
      {/* Header */}
      <TitleWithArrow
        title={"New Arrivals"}
        description={"Add new products to weekly line up"}
        onScrollLeft={() => scroll("left")}
        onScrollRight={() => scroll("right")}
      />
      <NewlyArrivedLayout />
    </div>
  );
};
