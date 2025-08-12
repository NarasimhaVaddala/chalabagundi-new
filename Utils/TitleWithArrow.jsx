import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const TitleWithArrow = ({
  title,
  description,
  onScrollLeft,
  onScrollRight,
}) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col">
        <h2 className="text-[20px] font-semibold">{title}</h2>
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onScrollLeft}
          className="p-2 rounded-full bg-gray-200 hover:bg-[#179958] cursor-pointer transition-colors duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={onScrollRight}
          className="p-2 rounded-full bg-gray-200 hover:bg-[#179958] cursor-pointer transition-colors duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TitleWithArrow;
