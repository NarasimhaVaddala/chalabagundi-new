import { allProductItems } from "@/public/data/items.data";
import { addToWishlist, removeFromWishlist } from "@/Store/slice/wishlistSlice";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useHomeBestSellerHook = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.items);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleItemClick = (category, subcategory, item) => {
    const query = new URLSearchParams({
      subcategory,
      name: item.name,
      // add more if you want
    }).toString();
    router.push(`/${category}?${query}`);
  };

  useEffect(() => {
    const tempItems = [];
    setIsLoading(false);
    // allProductItems.forEach((categoryObj) => {
    //   Object.entries(categoryObj).forEach(([categoryKey, subCategories]) => {
    //     Object.entries(subCategories).forEach(([subCatKey, itemArray]) => {
    //       const pickedItems = pickRandomItems(itemArray, 6);

    //       pickedItems.forEach((item) => {
    //         tempItems.push({
    //           ...item,
    //           _category: categoryKey,
    //           _subcategory: subCatKey,
    //         });
    //       });
    //     });
    //   });
    // });

    // const shuffledAllItems = shuffleArray(tempItems);
    setIsLoading(false);
    setItems(allProductItems);
  }, []);

  const handleWishlistAdded = (category, subcategory, item) => {
    // dispatch(addToWishlist(item, category, subcategory));
    const exists = wishlistItems.some(
      (w) => w.name === item.name && w.category === category
    );
    if (exists) {
      dispatch(removeFromWishlist({ name: item.name, category }));
    } else {
      dispatch(addToWishlist({ ...item, category, subcategory }));
    }
  };

  const isItemInWishlist = (item) =>
    wishlistItems.some(
      (w) => w.name === item.name && w.category === item._category
    );

  return {
    items,
    scroll,
    scrollRef,
    handleItemClick,
    isLoading,
    handleWishlistAdded,
    isItemInWishlist,
  };
};

// export function shuffleArray(array) {
//   const arr = [...array];
//   for (let i = arr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;
// }

// export function pickRandomItems(array, n) {
//   if (array.length <= n) return shuffleArray(array);
//   const shuffled = shuffleArray(array);
//   return shuffled.slice(0, n);
// }
