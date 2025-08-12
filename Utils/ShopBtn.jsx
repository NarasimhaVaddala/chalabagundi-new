import { ChevronRight } from "lucide-react";

export const ShopBtn = ({ style = "w-[160px]" }) => {
  return (
    <button
      className={`
        ${style}
      cursor-pointer
   
        bg-[#184d46] 
        hover:bg-[#179958] 
        transition-all 
        duration-300 
        ease-in-out 
        flex 
        justify-between
        items-center 
        gap-2 
        rounded-full 
        px-4 
        py-2.5 
        text-white 
        font-medium 
        shadow-md 
        hover:shadow-lg 
        active:scale-95
      `}
    >
      <span>Shop Now</span>
      <ChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
};
