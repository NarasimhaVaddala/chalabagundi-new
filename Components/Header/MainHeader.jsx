"use client";
import { Heart, User, ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SearchBar } from "./HeaderSearch";
import { motion } from "framer-motion";
import { Logo } from "./Logo";

export const MainHeader = ({ setOpen }) => {
  const router = useRouter();
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between each icon
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, x: 40 }, // start from right
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <>
      <div className="w-full flex justify-between items-center px-[clamp(1rem,6vw,5rem)] py-5 border-b border-b-gray-200 relative">
        <Logo />
        {/* Desktop Search */}
        <div className="hidden md:flex w-full md:w-[400px] lg:w-[600px] bg-[#f2f3f5] px-6 justify-between items-center h-[50px] rounded-3xl">
          <SearchBar />
        </div>
        {/* Animated Icons */}
        <motion.div
          className="flex gap-2 md:gap-5 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* User */}
          <motion.button
            variants={iconVariants}
            onClick={setOpen}
            className="cursor-pointer w-[35px] md:w-[46px] h-[35px] md:h-[46px] border border-gray-300 rounded-full flex justify-center items-center"
          >
            <User size={19} />
          </motion.button>

          {/* Wishlist */}
          <motion.span
            variants={iconVariants}
            onClick={() => router.push("/wishlist")}
            className="cursor-pointer w-[35px] md:w-[46px] h-[35px] md:h-[46px]  border border-gray-300 rounded-full flex justify-center items-center relative"
          >
            <Heart size={19} />
            {wishlistItems?.length > 0 && (
              <span className="w-[22px] h-[22px] rounded-full flex justify-center items-center bg-[#d92e1e] absolute -top-1 -right-2 text-white font-normal text-sm">
                {wishlistItems?.length}
              </span>
            )}
          </motion.span>

          {/* Cart */}
          <motion.span
            variants={iconVariants}
            onClick={() => router.push("/cart")}
            className="cursor-pointer w-[35px] md:w-[46px] h-[35px] md:h-[46px]  border border-gray-300 rounded-full flex justify-center items-center relative"
          >
            <ShoppingCart size={19} />
            {cartItems?.length > 0 && (
              <span className="w-[18px] md:w-[22px] h-[18px] md:h-[22px] rounded-full flex justify-center items-center bg-[#d92e1e] absolute -top-1 -right-2 text-white font-normal text-sm">
                {cartItems?.length}
              </span>
            )}
          </motion.span>

          {/* Mobile Search */}
          <motion.span
            variants={iconVariants}
            onClick={() => setShowMobileSearch((prev) => !prev)}
            className="md:hidden w-[35px] md:w-[46px] h-[35px] md:h-[46px]  border border-gray-300 rounded-full flex justify-center items-center cursor-pointer"
          >
            <Search size={19} />
          </motion.span>
        </motion.div>
      </div>

      {/* Mobile Search Bar */}
      {showMobileSearch && (
        <div className="md:hidden mb-4 w-full mt-3">
          <SearchBar />
        </div>
      )}
    </>
  );
};
