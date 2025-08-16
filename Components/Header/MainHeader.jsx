"use client";
import { Heart, User, ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SearchBar } from "./HeaderSearch";

export const MainHeader = ({ setOpen }) => {
  const router = useRouter();
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <>
      <div className="w-full flex justify-between items-center px-[clamp(1rem,6vw,5rem)] py-5 border-b border-b-gray-200 relative">
        <Link href="/">
          <span className="text-sm md:text-xl font-semibold text-[#184d46]">
            <span className="text-xl md:text-4xl font-semibold text-[#184d46]">
              చా
            </span>
            లా బాగుంధి
          </span>
        </Link>

        <div className="hidden md:flex w-full md:w-[400px] lg:w-[600px] bg-[#f2f3f5] px-6 justify-between items-center h-[50px] rounded-3xl">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {/* Icons */}
        <div className="flex gap-5 items-center">
          <button
            onClick={setOpen}
            className="cursor-pointer w-[46px] h-[46px] border border-gray-300 rounded-full flex justify-center items-center"
          >
            <User size={19} />
          </button>
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
            <Search />
          </span>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {showMobileSearch && (
        <div className="md:hidden mb-4 w-full mt-3">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      )}
    </>
  );
};
