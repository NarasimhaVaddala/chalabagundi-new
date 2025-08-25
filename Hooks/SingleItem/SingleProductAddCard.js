import { decrementQty, incrementQty } from "@/Store/slice/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const parsePrice = (priceString) => {
  const number = priceString?.match(/\d+/g)?.join("") || "0";
  return parseInt(number, 10);
};

export const useSingleProductAddCardHook = ({ singleItem, category }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [quantity, setQuantity] = useState(1);
  const [displayImg, setDisplayImg] = useState("");

  const pricePerItem = parsePrice(singleItem?.price || "₹ 0");

  const cartItem = cartItems.find(
    (item) => item.name === singleItem.name && item.category === category
  );
  const increment = () => {
    if (cartItem) dispatch(incrementQty({ name: singleItem.name, category }));
    setQuantity((q) => (q < 50 ? q + 1 : q));
  };

  const decrement = () => {
    if (cartItem && cartItem.quantity > 1)
      dispatch(decrementQty({ name: singleItem.name, category }));
    setQuantity((q) => (q > 1 ? q - 1 : q));
  };

  const totalPrice = pricePerItem * quantity;

  useEffect(() => {
    setDisplayImg(singleItem?.image?.[0]);
  }, [singleItem]);

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);

  return {
    quantity,
    increment,
    decrement,
    totalPrice,
    displayImg,
    setDisplayImg,
  };
};
