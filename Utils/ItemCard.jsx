import { Heart, Eye } from "lucide-react";
import { Star } from "./Starts";

export const ItemCard = ({ isAvailableDis = false, rating = 4 }) => {
  const totalStars = 5;

  return (
    <div className="group min-w-[230px] max-w-[230px] h-[330px] border border-gray-300 hover:rounded-sm overflow-hidden shadow-sm flex flex-col gap-2 hover:border-gray-400 transition-all duration-300 relative p-1">
      {/* Image section */}
      <div className="h-1/2 w-full overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZQGIVePBlTVmPgdS4KE-FZR-Iwj_cXWZow&s"
          alt="Biryani"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Action icons (hidden until hover) */}
      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <span className="w-[38px] h-[38px] rounded-full bg-white flex justify-center items-center cursor-pointer shadow hover:bg-red-400 transition">
          <Heart size={18} />
        </span>
        <span className="w-[38px] h-[38px] rounded-full bg-white flex justify-center items-center cursor-pointer shadow hover:bg-gray-300 transition">
          <Eye size={18} />
        </span>
      </div>

      {/* Content section */}
      <div className="h-1/2 p-4 flex flex-col gap-2">
        {/* Star rating */}
        <div className="flex items-center gap-1">
          {[...Array(totalStars)].map((_, i) => (
            <Star key={i} filled={i < rating} />
          ))}
        </div>

        <h3 className="text-base font-semibold text-gray-800">
          Hyderabadi Biryani
        </h3>
        <p className="text-red-500 font-bold text-lg">₹ 250</p>
        {isAvailableDis && (
          <div className="flex w-full gap-1.5">
            <p className="text-gray-500 text-sm">
              Sold:{" "}
              <span className="text-sm font-semibold text-black">200</span>
            </p>
            <p className="text-gray-500 text-sm">
              Available:{" "}
              <span className="text-sm font-semibold text-black">200</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
