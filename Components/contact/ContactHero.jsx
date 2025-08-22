"use client";
import { motion } from "framer-motion";
import React from "react";

export default function ContactHero() {
  return (
    <div className="relative w-full h-96 md:h-80 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered Text */}
      <motion.div
        className="relative z-10 flex items-center justify-center h-full text-center text-white px-6"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-semibold"
          style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}
        >
          We would love to hear from you
        </motion.h1>
      </motion.div>
    </div>
  );
}
