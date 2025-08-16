import { useState } from "react";
import { useAuthHook } from "../Auth/UseAuthHook";
import { useDispatch, useSelector } from "react-redux";
import { API } from "@/core/url";
import { clearCart } from "@/Store/slice/cartSlice";
import { showInfoMessage, showSuccessMessage } from "@/core/Toast";
import { useRouter } from "next/navigation";

export const useCartHook = () => {
  const { FormWrapper, errors, register, open, setOpen, otpSent, signUp } =
    useAuthHook();
  const dispatch = useDispatch();
  const router = useRouter();

  const { profile } = useSelector((state) => state.profile);

  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + parseInt(item?.price?.replace(/[^0-9]/g, ""), 10) * item.quantity,
    0
  );

  console.log(cartItems);

  const handleCheckOut = async () => {
    if (localStorage.getItem("token")) {
      //checkout
      router.push("/checkoutpage");
      /*
        const filteredItems = cartItems.map((e) => {
        return {
          ...e,
          price: parseInt(e?.price?.replace(/[^0-9]/g, ""), 10),
        };
      });

      console.log(filteredItems, "FIlyered Items");

      const resp = await API.post("/orders/place-order", {
        items: filteredItems,
        totalPrice,
        paymentStatus: "pending",
        paymentMode: "cash",
      });
      showSuccessMessage("Order Placed");
      dispatch(clearCart());
      */
    } else {
      setOpen(true);
    }
  };

  return {
    FormWrapper,
    errors,
    register,
    open,
    setOpen,
    otpSent,
    handleCheckOut,
    signUp,

    cartItems,
    totalPrice,
  };
};
