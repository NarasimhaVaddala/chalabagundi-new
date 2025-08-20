"use client";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import EmailSubscribe from "./EmailSubscribe";
import { motion } from "framer-motion";

export default function NewsletterBar() {
  return (
    <div className="bg-[#174E4B] text-white px-[clamp(1rem,6vw,5rem)] py-5 md:py-4 flex flex-col md:flex-row items-center justify-between gap-9">
      {/* Left Section - Mail Icon & Text */}
      <div className="flex items-center gap-4 min-w-[260px]">
        <div className="bg-[#0E3C38] p-3 rounded-full">
          <HiOutlineMail className="text-2xl" />
        </div>
        <div>
          <h3 className="font-semibold text-lg leading-tight">
            Sign up to Newsletter
          </h3>
          <p className="text-sm text-gray-200">
            ...and receive $20 coupon for first shopping
          </p>
        </div>
      </div>

      {/* Middle Section - Email Input */}
      <EmailSubscribe />

      {/* Right Section - WhatsApp Button */}
      <div className="w-full md:w-[200px] flex items-center gap-3 bg-[#0E3C38] px-5 py-2.5 rounded-full cursor-pointer hover:bg-[#0b302d] transition">
        <a
          href="https://wa.me/919014548747"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-gray-500 gap-3 hover:text-green-200 transition"
        >
          <motion.div
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="bg-green-500 p-2 rounded-full"
          >
            <FaWhatsapp className="text-xl text-white" />
          </motion.div>
          <div>
            <p className="text-[11px] text-gray-300 leading-tight">
              Call Us 24/7
            </p>
            <p className="text-sm font-semibold">+91 99999 99999</p>
          </div>
        </a>
      </div>
    </div>
  );
}
