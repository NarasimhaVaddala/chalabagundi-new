"use client";
import { Heart, HeartOff, Eye } from "lucide-react";
import CustomButton from "./CustomButton";
import QuantityButtons from "./QuantityButtons";
import { addToCart } from "@/Store/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export const ItemCard = ({
  previewItem = () => {},
  toggleWishlist = () => {},
  isInWishlist = false,
  category = "",
  subcategory = "",
  item,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems?.find(
    (product) => product.name === item?.name && product.category === category
  );
  const handleAddToCart = () => {
    dispatch(addToCart({ ...item, category, subcategory, quantity: 1 }));
  };

  return (
    <div className="cursor-pointer group min-w-[230px] max-w-[230px] h-[340px] border border-gray-200 hover:rounded-sm overflow-hidden flex flex-col gap-2 hover:border-gray-400 transition-all duration-300 relative p-1">
      {/* Image */}
      <div className="h-1/2 w-full overflow-hidden">
        <img
          src={item?.image?.[0]}
          alt={item?.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Wishlist + Preview Buttons */}
      <div
        className="absolute top-2 right-2 flex flex-col gap-2
        opacity-100 translate-y-0              /* mobile: visible */
        md:opacity-0 md:translate-y-[-10px]    /* md+ hide by default */
        md:group-hover:opacity-100 md:group-hover:translate-y-0
        transition-all duration-300"
      >
        {/* Wishlist */}
        <span
          onClick={toggleWishlist}
          className={`w-[36px] h-[36px] rounded-full bg-white flex justify-center items-center cursor-pointer shadow transition ${
            isInWishlist ? "bg-red-400 text-white" : "hover:bg-red-400"
          }`}
        >
          {isInWishlist ? (
            <HeartOff color="black" size={18} />
          ) : (
            <Heart size={18} />
          )}
        </span>

        {/* Preview */}
        <span className="w-[36px] h-[36px] rounded-full bg-white flex justify-center items-center cursor-pointer shadow hover:bg-gray-300 transition">
          <Eye onClick={previewItem} size={18} />
        </span>
      </div>

      <div className="h-1/2  px-4 py-2 flex flex-col gap-1">
        <h3 className="text-base font-semibold text-gray-800 line-clamp-1">
          {item?.name}
        </h3>
        <span className="text-sm text-gray-600  h-[40px] line-clamp-2">
          {item?.description}
        </span>
        <p className="text-red-500 font-bold text-lg">{item?.price}</p>

        {cartItem ? (
          <QuantityButtons cartItem={{ ...cartItem, category, subcategory }} />
        ) : (
          <CustomButton
            onClick={handleAddToCart}
            text={`Add to Cart ⭐${item?.rating}`}
            className="w-full"
          />
        )}
      </div>
    </div>
  );
};
