"use client";
import { Truck, BadgeDollarSign, Gift, Globe } from "lucide-react";

import { motion } from "framer-motion";

export default function FeaturesBar() {
  const features = [
    {
      icon: <Truck className="w-6 h-6 text-[#0f766e]" />,
      title: "Free Shipping",
      description: "Online Only. Exclusions Apply",
      bg: "bg-[#ccfbf1]",
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6 text-[#991b1b]" />,
      title: "Best Price Guarantee",
      description: "If You Find a Lower Price",
      bg: "bg-[#fecaca]",
    },
    {
      icon: <Gift className="w-6 h-6 text-[#6b21a8]" />,
      title: "Free Curbside Pickup",
      description: "Grab Your Gear and Go",
      bg: "bg-[#f3e8ff]",
    },
    {
      icon: <Globe className="w-6 h-6 text-[#92400e]" />,
      title: "Support 24/7",
      description: "Contact us 24 hours a day",
      bg: "bg-[#fef3c7]",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-10 py-6 px-4 bg-white shadow-sm">
      {features.map((item, index) => (
        <div key={index} className="flex items-center gap-4 min-w-[250px]">
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full ${item.bg}`}
          >
            <motion.span
              animate={{ x: [0, -8, 0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              {item.icon}
            </motion.span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-base">
              {item.title}
            </h4>
            <p className="text-sm text-gray-500 leading-tight">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
