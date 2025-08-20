import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const TitleWithArrow = ({
  title,
  description,
  onScrollLeft,
  onScrollRight,
  isDisplayArrow = true,
}) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col">
        <h2 className="text-[18px] md:text-[20px] font-semibold">{title}</h2>
        <p className="text-[12px] md:text-base text-gray-700">{description}</p>
      </div>
      {isDisplayArrow && (
        <div className="flex gap-2">
          <motion.button
            // animate={{ x: [0, -5, 0] }}
            // transition={{ repeat: Infinity, duration: 1.2 }}
            onClick={onScrollLeft}
            className="p-2 rounded-full bg-gray-200 hover:bg-[#179958] cursor-pointer transition-colors duration-300"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            onClick={onScrollRight}
            className="p-2 rounded-full bg-gray-200 hover:bg-[#179958] cursor-pointer transition-colors duration-300"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default TitleWithArrow;
