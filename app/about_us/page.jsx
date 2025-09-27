"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaGlobe, FaAward, FaRocket } from "react-icons/fa";
import CartLayout from "@/Components/Checkout/CartLayout";

const Page = () => {
  const stats = [
    {
      icon: <FaHeart className="text-5xl  mb-4 " />,
      value: 159,
      label: "Satisfied Clients",
    },
    {
      icon: <FaGlobe className="text-5xl mb-4" />,
      value: 68,
      label: "Projects a Year",
    },
    {
      icon: <FaAward className="text-5xl mb-4" />,
      value: 88,
      label: "Awards Won",
    },
    {
      icon: <FaRocket className="text-5xl mb-4" />,
      value: 668,
      label: "Support Tickets",
    },
  ];

  // Fade-up animation reusable variant
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={fadeUp}
        className="bg-[#f8fbf3] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 relative overflow-hidden"
      >
        <div className="mb-6 md:mb-0">
          <h1 className="text-4xl font-bold mb-2">About Us</h1>
          <p className="text-gray-600">
            Home <span className="mx-2">&gt;</span> About Us
          </p>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:block w-56 h-56"
        >
          <img
            src="https://content3.jdmagicbox.com/v2/comp/mumbai/r5/040pxx40.xx40.180630225100.v2r5/catalogue/my-tiffins-kanajiguda-hyderabad-breakfast-restaurants-ve06sxaer6.jpg"
            alt="About Us"
            className="w-full h-full object-contain rounded"
          />
        </motion.div>
      </motion.div>

      <div className="w-full flex flex-col gap-10 px-[clamp(1rem,6vw,5rem)] py-2 mt-14">
        {/* About Text + Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.3 }}
          className="text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
            Chala Bagundi <span className="text-green-600">for Taste</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Experience the taste of home at Chala Bagundhi cloud kitchen in
            Hyderabad. Order Chala Bagundhi tiffins, Chala Bagundhi biryani, and
            Chala Bagundhi meals Hyderabad easily through food delivery apps in
            Hyderabad. Our cloud kitchen takeaway Hyderabad ensures every bite
            is fresh, while our cakes cloud kitchen Hyderabad adds a sweet touch
            to your day. Discover why we’re among the top cloud kitchens serving
            the best Hyderabadi biryani Hyderabad.
          </motion.p>
          <motion.div variants={fadeUp} className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A crispy dosa served with chutneys and curry at Chala Bagundhi cloud kitchen Hyderabad, offering authentic tiffins, meals, biryani, pickles, and cakes through food delivery apps in Hyderabad"
              className="w-full h-[400px] md:h-[620px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Who We Are + Values + Mission */}
        <div className="space-y-12">
          {[
            {
              title: "Who We Are ?",
              text: "Chala Bagundhi cloud kitchen in Hyderabad serves authentic tiffins, meals, and biryani that remind you of home. Enjoy Chala Bagundhi meals Hyderabad and Chala Bagundhi biryani delivered conveniently through food delivery apps in Hyderabad.",
            },
            {
              title: "Our Values",
              text: `We focus on quality, freshness, and taste in every dish. With cloud kitchen takeaway Hyderabad, cakes cloud kitchen Hyderabad, and daily tiffins, we ensure every meal reaches you with homestyle flavors and care.`,
            },
            {
              title: "Our Mission",
              text: "Our mission is to make traditional, tasty food accessible to everyone. From the best Hyderabadi biryani Hyderabad to freshly prepared meals, Chala Bagundhi blends tradition with convenience and satisfaction in every bite.",
            },
          ].map((sec, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              variants={fadeUp}
              className="grid md:grid-cols-2 gap-8 items-start"
            >
              <h2 className="text-2xl font-bold">{sec.title}</h2>
              <p className="text-gray-600">{sec.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ staggerChildren: 0.2 }}
          className="bg-[#13544e] text-white grid grid-cols-2 md:grid-cols-4 gap-8 items-center p-5"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center flex flex-col justify-center items-center"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                {stat.icon}
              </motion.div>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <CartLayout />
    </div>
  );
};

export default Page;
