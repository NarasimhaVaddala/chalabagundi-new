import { ChevronRight } from "lucide-react";

export const ShopBtn = ({ style = "w-[160px]", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${style}
      cursor-pointer
   
        bg-[#184d46] 
        hover:bg-[#179958] 
        transition-all 
        duration-300 
        ease-in-out 
        flex 
        justify-between
        items-center 
        gap-2 
        rounded-full 
        px-4 
        py-2.5 
        text-white 
        font-medium 
        shadow-md 
        hover:shadow-lg 
        active:scale-95
      `}
    >
      <span>Shop Now</span>
      <ChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
};

// animation
// "use client";
// import { motion } from "framer-motion";
// import { ChevronRight } from "lucide-react";

// export const ShopBtn = ({ onClick }) => {
//   return (
//     <motion.button
//       onClick={onClick}
//       initial={{ width: 50 }}
//       whileHover={{ width: 160 }}
//       transition={{ type: "spring", stiffness: 200, damping: 20 }}
//       className="
//         cursor-pointer
//         bg-[#184d46]
//         hover:bg-[#179958]
//         flex
//         items-center
//         rounded-full
//         px-3
//         py-2.5
//         text-white
//         font-medium
//         shadow-md
//         overflow-hidden
//         group
//       "
//     >
//       {/* Icon */}
//       <motion.div
//         className="flex-shrink-0"
//         initial={{ x: 0 }}
//         whileHover={{ x: 60 }} // 👈 move icon to the right side
//         transition={{ type: "spring", stiffness: 250, damping: 20 }}
//       >
//         <ChevronRight size={20} />
//       </motion.div>

//       {/* Text */}
//       <motion.span
//         className="absolute left-10 whitespace-nowrap"
//         initial={{ opacity: 0, x: -20 }}
//         whileHover={{ opacity: 1, x: 10 }}
//         transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
//       >
//         Shop Now
//       </motion.span>
//     </motion.button>
//   );
// };
