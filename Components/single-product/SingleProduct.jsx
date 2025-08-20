"use client";
import OurStoreProduct from "@/Utils/OurStoreProduct";
import React from "react";
import SingleProductLeftImge from "./SingleProductLeftImge";
import { useSingleProductAddCardHook } from "@/Hooks/SingleItem/SingleProductAddCard";
import RightProductDetails from "./RightProductDetails";

const SingleProduct = ({ singleItem, category, subcategory }) => {
  const {
    quantity,
    increment,
    decrement,
    totalPrice,
    displayImg,
    setDisplayImg,
  } = useSingleProductAddCardHook({ singleItem, category, subcategory });

  return (
    <div className="w-full flex flex-col gap-7">
      <div className="w-full flex flex-col md:flex-row justify-between gap-6 items-start">
        <SingleProductLeftImge image={displayImg ?? singleItem?.image?.[0]} />

        <RightProductDetails
          category={category}
          decrement={decrement}
          increment={increment}
          quantity={quantity}
          setDisplayImg={setDisplayImg}
          singleItem={singleItem}
          subcategory={subcategory}
          totalPrice={totalPrice}
        />
      </div>

      <OurStoreProduct />
    </div>
  );
};

export default SingleProduct;
