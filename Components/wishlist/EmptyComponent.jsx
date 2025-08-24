import Link from "next/link";
import React from "react";
import { Heart, ShoppingBag, Plus, ArrowRight } from "lucide-react";

const EmptyComponent = ({ text = "Wishlist" }) => {
  // Choose icon based on the text prop
  const getIcon = () => {
    switch (text.toLowerCase()) {
      case "wishlist":
        return <Heart className="w-16 h-16 text-gray-300" />;
      case "cart":
        return <ShoppingBag className="w-16 h-16 text-gray-300" />;
      default:
        return <ShoppingBag className="w-16 h-16 text-gray-300" />;
    }
  };

  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center py-12 px-8 max-w-md mx-auto">
        {/* Animated Icon Container */}
        <div className="relative mb-8">
          <div className="animate-pulse bg-gray-100 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
            {getIcon()}
          </div>

          {/* Floating Plus Icon */}
          <div className="absolute -top-2 -right-8 animate-bounce">
            <Link
              href={"/"}
              className="bg-green-500 block rounded-full p-2 shadow-lg"
            >
              <Plus className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Your {text} is Empty
          </h3>

          <p className="text-gray-500 text-lg leading-relaxed">
            Looks like you haven't added anything to your {text.toLowerCase()}{" "}
            yet.
            <br />
            <span className="text-sm">
              Discover amazing products and start adding!
            </span>
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <Link
            href={"/"}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <ShoppingBag className="w-5 h-5" />
            Continue Shopping
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Decorative Elements */}
        {/* <div className="mt-12 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-green-200 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-150"></div>
        </div> */}
      </div>
    </div>
  );
};

export default EmptyComponent;
