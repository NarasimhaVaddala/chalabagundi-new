"use client";
import React from "react";
import { motion } from "framer-motion";
import HowItsWorkLink from "./HowItsWorkLink";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HowItWorkFirst = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center">
        {/* Left Image */}
        <motion.div
          className="w-full md:w-[45%]"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <img
            src="https://htmldemo.net/mixy/mixy/assets/images/banners/img_banner1_mixy3.webp"
            alt=""
            className="w-[86%]"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="w-full md:w-[50%] flex flex-col gap-5 justify-center items-center"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <h2 className="text-base font-semibold text-[#4b9b57]">
            How It Works
          </h2>
          <h1 className="text-4xl font-semibold text-[#184d47] mb-6">
            Highest Quality
          </h1>
          <div className="w-full flex flex-col gap-2">
            <span className="text-base font-semibold text-black">
              At Chala Bagundhi, we make food ordering simple, fast, and
              reliable. With just a few clicks, you can enjoy your favorite
              tiffins, biryani, meals, cakes, and pickles delivered straight to
              your doorstep.
            </span>
            <span className="text-base font-semibold text-black">
              Highest Quality , Every Time.{" "}
            </span>
            <span className="text-sm font-semibold text-black">
              We believe that quality food brings happiness. Every item is
              carefully prepared using fresh ingredients, authentic recipes, and
              hygienic cooking practices. Whether it’s a quick snack or a
              wholesome meal, we ensure you get the best taste with the highest
              quality standards.
            </span>
            <span className="text-sm font-semibold text-black">
              Simple Ordering Process
            </span>
            <ul className="list-disc pl-9">
              <li className="text-sm text-gray-700">
                Choose Your Food: Browse our wide range of delicious options –
                from traditional South Indian breakfasts to spicy biryanis,
                homemade pickles, cakes, and more.
              </li>
              <li className="text-sm text-gray-700">
                We Prepare With: Care Our expert chefs cook with love, following
                authentic recipes and maintaining the highest hygiene standards.
              </li>
              <li className="text-sm text-gray-700">
                Fast Delivery to Your Doorstep Your order is delivered hot and
                fresh, so you can enjoy a homely food experience without
                stepping out.
              </li>
            </ul>

            <span className="text-sm text-gray-700 mt-2">
              Please be assured that we are doing our best to fulfill all
              orders, however, do understand the circumstances may cause a delay
              in getting you your groceries.
            </span>
            <span className="text-sm text-gray-700 mt-3">
              Stay safe and we thank you for your trust and understanding.
            </span>
          </div>
        </motion.div>
      </div>

      {/* Link Section with Steps */}
      <HowItsWorkLink />
    </div>
  );
};

export default HowItWorkFirst;
