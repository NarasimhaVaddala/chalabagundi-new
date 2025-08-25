import { addToWishlist, removeFromWishlist } from "@/Store/slice/wishlistSlice";
import { ItemCard } from "@/Utils/ItemCard";
import Pagination from "@/Utils/Pagination";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const FilterRightSideItems = ({
  categoryItems,
  currentPage,
  setCurrentPage,
  itemsPerPage,
}) => {
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.items);

  const router = useRouter();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = categoryItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleItemClick = (item) => {
    const query = new URLSearchParams({
      subcategory: item?.subCategory,
      name: item.name,
    }).toString();
    router.push(`/${item?.category}?${query}`);
  };

  const handleWishlistAdded = (item) => {
    const exists = wishlistItems.some((w) => {
      return w.name === item.name && w.category === item?.category;
    });

    exists
      ? dispatch(
          removeFromWishlist({ name: item.name, category: item?.category })
        )
      : dispatch(addToWishlist(item));
  };

  const isItemInWishlist = (item) =>
    wishlistItems.some(
      (w) => w.name === item.name && w.category === item.category
    );

  return (
    <div className="w-full md:w-[calc(100%-200px)]">
      {categoryItems.length > 0 ? (
        <>
          <div className="w-full flex flex-wrap  justify-center md:justify-start items-center gap-4 md:gap-0">
            {paginatedItems?.map((item) => (
              <ItemCard
                key={item.name}
                item={item}
                category={item?.category}
                subcategory={item?.subCategory}
                previewItem={() => handleItemClick(item)}
                toggleWishlist={() => handleWishlistAdded(item)}
                isInWishlist={isItemInWishlist(item)}
              />
            ))}
          </div>
          <Pagination
            pageCount={Math.ceil(categoryItems.length / itemsPerPage)}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <div className="w-full min-h-[300px] flex justify-center items-center shadow">
          <h2>No Item Found</h2>
        </div>
      )}
    </div>
  );
};

export default FilterRightSideItems;
