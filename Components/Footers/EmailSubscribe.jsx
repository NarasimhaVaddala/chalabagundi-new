"use client";
import { motion } from "framer-motion";

export default function EmailSubscribe() {
  return (
    <div className="flex w-full md:w-[40%] h-12 rounded-full overflow-hidden border border-gray-300 bg-white p-1.5">
      <input
        type="email"
        placeholder="Your Email Address..."
        className="flex-1 px-4 text-gray-700 outline-none text-sm"
      />

      <motion.button
        initial={{ x: -200, opacity: 0 }} // 👈 start just slightly outside
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="bg-green-600 hover:bg-green-700 text-white w-[110px] text-sm font-medium rounded-2xl"
      >
        Subscribe!
      </motion.button>
    </div>
  );
}
