"use client";
import { addToCart, removeFromCart } from "@/Store/slice/cartSlice";
import { addToWishlist, removeFromWishlist } from "@/Store/slice/wishlistSlice";
import { Star } from "@/Utils/Starts";
import { motion } from "framer-motion";
import { HeartPlus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const RightProductDetails = ({
  setDisplayImg,
  totalPrice,
  quantity,
  increment,
  decrement,
  singleItem,

  //
  category,
  subcategory,
}) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = cartItems.some(
    (item) => item.name === singleItem.name && item.category === category
  );
  const isInWishlist = wishlistItems.some(
    (item) => item.name === singleItem.name && item.category === category
  );

  // Toggle Cart
  const handleToggleCart = () => {
    if (isInCart) {
      dispatch(removeFromCart({ name: singleItem.name, category }));
    } else {
      dispatch(addToCart({ ...singleItem, category, subcategory, quantity }));
    }
  };

  // Toggle Wishlist
  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch(
        removeFromWishlist({
          name: singleItem.name,
          category,
        })
      );
    } else {
      dispatch(addToWishlist({ ...singleItem, category, subcategory }));
    }
  };

  // Container animation (staggered children)
  const container = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        staggerChildren: 0.15, // 👈 stagger inside
      },
    },
  };

  // Children animation
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="w-full md:w-[50%] flex flex-col gap-3"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2 variants={item} className="font-semibold text-2xl text-black">
        {singleItem?.name}
      </motion.h2>

      <motion.span
        variants={item}
        className="text-base font-medium text-gray-600"
      >
        {singleItem?.description}
      </motion.span>

      <motion.div variants={item} className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} filled={i < singleItem?.rating} />
        ))}
      </motion.div>

      <motion.h3
        variants={item}
        className="text-3xl font-semibold text-red-800"
      >
        ₹ {totalPrice} /-
      </motion.h3>

      <motion.span
        variants={item}
        className="px-2 py-1 bg-[#e0fade] text-[#179958] w-[120px] flex justify-center items-center text-sm font-semibold"
      >
        484 in Stock
      </motion.span>

      <motion.div variants={item} className="w-full flex gap-7 mt-3">
        <div className="flex items-center gap-4">
          <button
            onClick={decrement}
            className="cursor-pointer w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gray-100 text-lg font-semibold"
          >
            -
          </button>
          <span className="text-lg font-semibold text-black">{quantity}</span>
          <button
            onClick={increment}
            className="cursor-pointer w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gray-100 text-lg font-semibold"
          >
            +
          </button>
        </div>

        <button
          onClick={handleToggleCart}
          className={`cursor-pointer px-4 py-2 rounded-4xl text-white font-semibold ${
            isInCart ? "bg-red-500" : "bg-[#179958]"
          }`}
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </motion.div>

      <motion.div
        variants={item}
        className="flex items-center gap-3 cursor-pointer"
        onClick={handleToggleWishlist}
      >
        <HeartPlus color={isInWishlist ? "red" : "gray"} />
        <span className="text-gray-800">
          {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </span>
      </motion.div>

      <motion.span
        variants={item}
        className="text-sm font-normal text-gray-700"
      >
        <span className="text-gray-500">Categories:</span>{" "}
        {singleItem?.main_ingredient}
      </motion.span>

      <motion.div
        variants={item}
        className="w-full flex flex-wrap items-center gap-1.5"
      >
        {singleItem?.image?.slice(0, 4)?.map((img, index) => (
          <span
            onClick={() => setDisplayImg(img)}
            key={index}
            className="cursor-pointer w-[80px] md:w-[120px] h-20 md:h-[150px] border border-gray-200"
          >
            <img
              src={img}
              className="w-full h-full"
              alt={`${singleItem.name} image ${index + 2}`}
            />
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default RightProductDetails;
