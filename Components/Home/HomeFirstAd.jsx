"use client";
import { motion } from "framer-motion";

export const HomeFirstAd = () => {
  // Card container animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  // Inner text/content animation
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 120 },
    }),
  };

  return (
    <div className="w-full flex justify-between items-center flex-wrap gap-6">
      {/* Biryani Card */}
      <motion.div
        className="w-full md:w-[47%] relative"
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }} // animate on scroll
      >
        <img
          className="w-full rounded-lg h-[200px] md:h-[250px] object-cover"
          src="https://t4.ftcdn.net/jpg/01/43/08/01/360_F_143080110_bhy9PAHvK2A5K2HrlJqEnhHlJOXEZ8k0.jpg"
          alt="Delicious Biryani"
        />
        <div className="flex flex-col justify-center gap-2 absolute top-0 left-7 h-full">
          <motion.div
            className="flex flex-col gap-4 bg-white/10 p-4 rounded-md backdrop-blur-sm"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
          >
            <motion.h2
              className="text-lg font-bold text-black"
              variants={contentVariants}
              custom={0}
            >
              Spicy & Flavorful <br /> Hyderabadi Biryani
            </motion.h2>
            <motion.span
              className="text-xl font-semibold text-[#da2e1f]"
              variants={contentVariants}
              custom={1}
            >
              Starting at ₹199
            </motion.span>
          </motion.div>
        </div>
      </motion.div>

      {/* Pickles Card */}
      <motion.div
        className="w-full md:w-[47%] relative"
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          className="w-full rounded-lg h-[200px] md:h-[250px] object-cover"
          src="https://t4.ftcdn.net/jpg/05/55/06/43/360_F_555064359_tZcX3dC7DZtD5tvW8mWKnSkpI6LusKxZ.jpg"
          alt="Homemade Pickles"
        />
        <div className="flex flex-col justify-center gap-2 absolute top-0 left-7 h-full">
          <motion.div
            className="flex flex-col gap-4 bg-white/20 p-4 rounded-md backdrop-blur-sm"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
          >
            <motion.h2
              className="text-lg font-bold text-black"
              variants={contentVariants}
              custom={0}
            >
              Tangy & Tasty <br /> Homemade Pickles
            </motion.h2>
            <motion.span
              className="text-xl font-semibold text-[#da2e1f]"
              variants={contentVariants}
              custom={1}
            >
              Flat 15% OFF
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
