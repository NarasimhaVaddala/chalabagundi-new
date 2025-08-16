import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useSingleProductAddCardHook = ({ singleItem }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [displayImg, setDisplayImg] = useState("");

  const parsePrice = (priceString) => {
    const number = priceString?.match(/\d+/g)?.join("") || "0";
    return parseInt(number, 10);
  };

  const pricePerItem = parsePrice(singleItem?.price || "₹ 0");

  const increment = () => setQuantity((q) => (q < 99 ? q + 1 : q)); // max 99
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : q)); // min 1

  const totalPrice = pricePerItem * quantity;

  useEffect(() => {
    setDisplayImg(singleItem?.image?.[0]);
  }, [singleItem]);

  return {
    quantity,
    increment,
    decrement,
    totalPrice,
    displayImg,
    setDisplayImg,
  };
};
