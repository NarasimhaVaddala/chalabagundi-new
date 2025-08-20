"use client";
import { ItemCard } from "@/Utils/ItemCard";
import TitleWithArrow from "@/Utils/TitleWithArrow";
import { useHomeBestSellerHook } from "@/Hooks/HomeBestSeller.Hook";
import LoaderUi from "@/Utils/Loader";
import { motion } from "framer-motion";

export const itemVariants = {
  hidden: { opacity: 0, transform: "translateY(30px)" }, // transform only
  show: (i) => ({
    opacity: 1,
    transform: "translateY(0px)",
    transition: { delay: i * 0.1, type: "spring", stiffness: 80 },
  }),
};

export const BestSellers = ({
  title = "Best Sellers",
  description = "Add bestselling products to weekly line up",
  isAvailableDis = false,
}) => {
  const {
    items,
    scroll,
    scrollRef,
    handleItemClick,
    handleWishlistAdded,
    isLoading,
    isItemInWishlist,
  } = useHomeBestSellerHook();

  return (
    <div className="w-full flex flex-col gap-4 mt-3">
      <TitleWithArrow
        title={title}
        description={description}
        onScrollLeft={() => scroll("left")}
        onScrollRight={() => scroll("right")}
      />

      {isLoading ? (
        <LoaderUi />
      ) : (
        <div
          ref={scrollRef}
          className="flex overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth border-y border-gray-200"
        >
          {items?.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              <ItemCard
                name={item.name}
                previewItem={() =>
                  handleItemClick(item._category, item._subcategory, item)
                }
                toggleWishlist={() =>
                  handleWishlistAdded(item._category, item._subcategory, item)
                }
                image={item?.image?.[0]}
                isAvailableDis={isAvailableDis}
                rating={item?.rating}
                price={item?.price}
                description={item?.description}
                isInWishlist={isItemInWishlist(item)}
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
