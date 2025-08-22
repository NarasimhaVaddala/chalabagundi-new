"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaGlobe, FaAward, FaRocket } from "react-icons/fa";

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
            At Chala Bagundhi, we believe that food is not just about filling
            your stomach, it’s about filling your heart with happiness. From
            authentic South Indian tiffins to flavorful biryani, pickles, cakes,
            and wholesome meals, every dish is crafted to bring you the true
            taste of tradition. Our recipes are prepared with love, fresh
            ingredients, and a touch of home-style cooking that makes every bite
            memorable.
          </motion.p>
          <motion.div variants={fadeUp} className="flex justify-center">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/d9d752c0f8cee46c4f1a52befe4923be"
              alt="Grocery Store"
              className="w-full h-[400px] md:h-[620px] rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Who We Are + Values + Mission */}
        <div className="space-y-12">
          {[
            {
              title: "Who We Are ?",
              text: "Chala Bagundhi is a one-stop destination for food lovers who crave authentic and delicious meals. We are passionate about serving high-quality food that connects people to their roots and reminds them of home-cooked flavors. Whether you’re looking for a quick breakfast, a festive meal, or a sweet treat, we bring a wide variety of options to suit every taste.",
            },
            {
              title: "Our Values",
              text: `At Chala Bagundhi, we stand by three core values: Quality First – We use only fresh, hygienic, and authentic ingredients in every dish. Customer Happiness – Your satisfaction is our priority, and we strive to deliver food that makes you say, “Chala Bagundhi! Tradition & Innovation – We preserve the taste of tradition while innovating to match modern food needs.`,
            },
            {
              title: "Our Mission",
              text: "Our mission is simple: to bring authentic, tasty, and healthy food to every plate. We aim to make traditional recipes accessible to everyone while ensuring convenience, quality, and affordability. With every meal, we want to create smiles, memories, and a reason to come back for more.",
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

        {/* Meet Our Team */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Marcosinacioluz",
                role: "Designer",
                img: "https://htmldemo.net/mixy/mixy/assets/images/teams/leader1-about2-1.jpg",
              },
              {
                name: "Wingcitymedia",
                role: "Photographer",
                img: "https://htmldemo.net/mixy/mixy/assets/images/teams/leader2-about2-1.jpg",
              },
              {
                name: "Tee3sports",
                role: "Designer",
                img: "https://htmldemo.net/mixy/mixy/assets/images/teams/leader3-about2-1.jpg",
              },
              {
                name: "Aussiemines",
                role: "C.E.O",
                img: "https://htmldemo.net/mixy/mixy/assets/images/teams/leader4-about2-1.jpg",
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 text-center rounded shadow">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
