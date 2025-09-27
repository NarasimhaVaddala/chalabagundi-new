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
            alt="Delivery boy holding a grocery box with fresh vegetables and bread for Chala Bagundhi cloud kitchen Hyderabad offering tiffins, meals, biryani, pickles, and cakes through food delivery apps."
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
              At Chala Bagundhi cloud kitchen Hyderabad, food ordering is
              simple, fast, and reliable. With food delivery apps in Hyderabad,
              enjoy your favorite tiffins, biryani, meals, pickles, and cakes
              delivered to your doorstep.
            </span>
            <span className="text-base font-semibold text-black">
              Highest Quality , Every Time.{" "}
            </span>
            <span className="text-sm font-semibold text-black">
              Highest quality every time, our chefs prepare dishes with fresh
              ingredients and authentic recipes. From cloud kitchen takeaway
              Hyderabad to daily meals delivery cloud kitchen Hyderabad, we
              ensure homely taste with hygiene.
            </span>
            <span className="text-sm font-semibold text-black">
              Simple Ordering Process
            </span>
            <ul className="list-disc pl-9">
              <li className="text-sm text-gray-700">
                Choose Your Food: From South Indian tiffins, biryani, pickles,
                cakes, and Chala Bagundhi meals Hyderabad
              </li>
              <li className="text-sm text-gray-700">
                We Prepare With Care: Expert chefs follow authentic methods with
                high hygiene standards.
              </li>
              <li className="text-sm text-gray-700">
                Fast Delivery: With Chala Bagundhi cloud kitchen restaurants,
                enjoy fresh and hot food at home
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
