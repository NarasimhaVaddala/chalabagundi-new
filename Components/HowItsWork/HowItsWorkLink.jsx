"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3 },
  },
};

const lineGrow = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const HowItsWorkLink = () => {
  return (
    <motion.div
      className="w-full flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 my-7"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      {/* 1st block */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col gap-3 justify-center items-center relative"
      >
        <img
          src="https://htmldemo.net/mixy/mixy/assets/images/others/img1_banner2_mixy3.webp"
          alt=""
        />
        <span className="text-base text-center text-gray-600">
          Shop groceries and home essentials from your
          <br /> favorite local stores.
        </span>

        {/* animated line */}
        <motion.img
          src="https://htmldemo.net/mixy/mixy/assets/images/others/line1.png"
          className="hidden md:block absolute right-[-180px] top-14 origin-left"
          alt=""
          variants={lineGrow}
        />
      </motion.div>

      {/* 2nd block */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col gap-3 justify-center items-center relative"
      >
        <img
          src="https://htmldemo.net/mixy/mixy/assets/images/others/img2_banner2_mixy3.webp"
          alt=""
        />
        <span className="text-base text-center text-gray-600">
          Burpy routes your order to a vetted Personal Shopper <br /> who
          collects your items.
        </span>

        {/* animated line */}
        <motion.img
          src="https://htmldemo.net/mixy/mixy/assets/images/others/line2.png"
          className="hidden md:block absolute right-[-150px] top-10 origin-left"
          alt=""
          variants={lineGrow}
        />
      </motion.div>

      {/* 3rd block */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col gap-3 justify-center items-center"
      >
        <img
          src="https://htmldemo.net/mixy/mixy/assets/images/others/img3_banner2_mixy3.webp"
          alt=""
        />
        <span className="text-base text-center text-gray-600">
          Your order is delivered in as little as 1 hour
        </span>
      </motion.div>
    </motion.div>
  );
};

export default HowItsWorkLink;
