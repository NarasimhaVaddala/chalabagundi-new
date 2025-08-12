import React from "react";

const FilterItemFirstCard = () => {
  return (
    <div className="relative w-full h-[200px] bg-[#f6faf0] rounded-lg overflow-hidden flex items-center px-12">
      {/* Left side text */}
      <div className="z-10">
        <h2 className="font-semibold text-2xl mb-2">Shop Now</h2>
      </div>

      {/* Top right big image */}
      <img
        src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-birthday-cake-dessert-pink-three-dimensional-png-image_12164412.png"
        alt="Cake"
        className="absolute top-0 right-0 w-40 h-40 object-contain"
      />
    </div>
  );
};

export default FilterItemFirstCard;
