import { Heart, HeartOff, Eye } from "lucide-react";
import { Star } from "./Starts";

export const ItemCard = ({
  isAvailableDis = false,
  image,
  previewItem = () => {},
  name,
  rating,
  price,
  description,
  toggleWishlist = () => {},
  isInWishlist = false,
}) => {
  return (
    <div className="group min-w-[230px] max-w-[230px] h-[330px] border border-gray-200 hover:rounded-sm overflow-hidden flex flex-col gap-2 hover:border-gray-400 transition-all duration-300 relative p-1">
      <div className="h-1/2 w-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <span
          onClick={toggleWishlist}
          className={`w-[38px] h-[38px] rounded-full bg-white flex justify-center items-center cursor-pointer shadow transition ${
            isInWishlist ? "bg-red-400 text-white" : "hover:bg-red-400 "
          }`}
        >
          {isInWishlist ? (
            <HeartOff color="black" size={18} />
          ) : (
            <Heart size={18} />
          )}
        </span>
        <span className="w-[38px] h-[38px] rounded-full bg-white flex justify-center items-center cursor-pointer shadow hover:bg-gray-300 transition">
          <Eye onClick={previewItem} size={18} />
        </span>
      </div>

      <div className="h-1/2 p-4 flex flex-col gap-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} filled={i < rating} />
          ))}
        </div>
        <h3 className="text-base font-semibold text-gray-800">{name}</h3>
        <span className="text-sm text-gray-800 -mt-1.5 line-clamp-2">
          {description}
        </span>
        <p className="text-red-500 font-bold text-lg">{price}</p>
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
