"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp, FaChevronDown, FaInbox } from "react-icons/fa";
import { ShoppingBag } from "lucide-react";
import CustomButton from "@/Utils/CustomButton";
import { useSelector } from "react-redux";
import CardItem from "../card/CardItem";
import { useRouter } from "next/navigation";

export default function CartLayout() {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const router = useRouter();

  const navigateToCheckout = () => {
    router.push("/cart");
  };

  return (
    <>
      {cartItems?.length > 0 && (
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="fixed z-40 flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-full shadow-lg cursor-pointer right-6 bottom-6 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 group"
          aria-label={open ? "Close cart" : "Open cart"}
        >
          <ShoppingBag size={24} />

          {/* Badge: Always visible, shows count */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
            {cartItems.length > 9 ? "9+" : cartItems.length}
          </span>
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.5)] bg-opacity-30 backdrop-blur-sm"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed z-50 bg-white w-[500px] max-w-full h-[500px] bottom-0 right-6 rounded-tl-2xl rounded-tr-2xl shadow-2xl border-t border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <ShoppingBag /> Items in Cart
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Close"
              >
                <FaChevronDown />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CardItem key={item.name} item={item} />
                ))}
              </div>
            </div>

            <CustomButton
              text={`Checkout`}
              onClick={navigateToCheckout}
              className="mx-4"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
