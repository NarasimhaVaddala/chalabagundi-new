"use client";

import { Heart, Search, User, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

export const MainHeader = () => {
  const router = useRouter();
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <>
      {/* Header */}
      <div className="w-full flex justify-between items-center px-[clamp(1rem,6vw,5rem)] py-5 border-b border-b-gray-200">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/mixy-logo.png"
            alt="Mixy"
            width={40}
            height={40}
            className="rounded transition-transform group-hover:scale-110"
          />
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex w-full md:w-[400px] lg:w-[600px] bg-[#f2f3f5] px-6 justify-between items-center h-[50px] rounded-3xl">
          <input
            type="text"
            className="w-[95%] h-full border-none outline-none bg-transparent"
            placeholder="Search Product...!"
          />
          <Search color="gray" size={18} />
        </div>

        {/* Icons */}
        <div className="flex gap-5 items-center">
          <span className="cursor-pointer w-[46px] h-[46px] border border-gray-300 rounded-full flex justify-center items-center">
            <User size={19} />
          </span>
          <span
            onClick={() => router.push("/wishlist")}
            className="cursor-pointer w-[46px] h-[46px] border border-gray-300 rounded-full flex justify-center items-center relative"
          >
            <Heart size={19} />
            {wishlistItems?.length > 0 && (
              <span className=" w-[22px] h-[22px] rounded-full flex justify-center items-center bg-[#d92e1e] absolute -top-1 -right-2 text-white font-normal text-sm">
                {wishlistItems?.length}
              </span>
            )}
          </span>
          <span
            onClick={() => router.push("/cart")}
            className="cursor-pointer w-[46px] h-[46px] border border-gray-300 rounded-full flex justify-center items-center relative"
          >
            <ShoppingCart size={19} />
            {cartItems?.length > 0 && (
              <span className="w-[22px] h-[22px] rounded-full flex justify-center items-center bg-[#d92e1e] absolute -top-1 -right-2 text-white font-normal text-sm">
                {cartItems?.length}
              </span>
            )}
          </span>

          {/* Mobile Search Icon */}
          <span
            onClick={() => setShowMobileSearch((prev) => !prev)}
            className="md:hidden w-[46px] h-[46px] border border-gray-300 rounded-full flex justify-center items-center cursor-pointer"
          >
            <Search size={19} />
          </span>
        </div>
      </div>

      {/* Mobile Search Bar - Column Layout */}
      {showMobileSearch && (
        <div className="md:hidden w-full bg-[#f2f3f5] px-6 flex justify-between items-center h-[50px] rounded-3xl mt-3">
          <input
            type="text"
            className="w-[95%] h-full border-none outline-none bg-transparent"
            placeholder="Search Product...!"
          />
          <Search color="gray" size={18} />
        </div>
      )}
    </>
  );
};
