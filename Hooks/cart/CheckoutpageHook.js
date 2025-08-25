"use client";
import {
  showAxiosError,
  showInfoMessage,
  showSuccessMessage,
} from "@/core/Toast";
import { API } from "@/core/url";
import { clearCart } from "@/Store/slice/cartSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCheckOutPageHook = () => {
  const { profile } = useSelector((state) => state.profile);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + parseInt(item?.price?.replace(/[^0-9]/g, ""), 10) * item.quantity,
    0
  );

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const router = useRouter();

  const handleCheckOut = async () => {
    if (cartItems.length < 1) {
      showInfoMessage("Add Items to cart");
      router.push("/");
      return;
    }

    if (profile.address.length < 1) {
      showInfoMessage("Add atleast one address");
      return;
    }

    if (!selectedAddress) {
      showInfoMessage("Select address");
      return;
    }

    try {
      const filteredItems = cartItems.map((e) => {
        return {
          ...e,
          price: parseInt(e?.price?.replace(/[^0-9]/g, ""), 10),
        };
      });

      const resp = await API.post("/orders/place-order", {
        items: filteredItems,
        totalPrice,
        paymentStatus: "pending",
        paymentMode: paymentMethod,
        selectedAddress: selectedAddress,
      });
      showSuccessMessage("Order Placed");
      dispatch(clearCart());
      router.push("/");
    } catch (error) {
      showAxiosError(error);
    }
  };

  return {
    handleCheckOut,
    profile,
    cartItems,
    selectedAddress,
    setSelectedAddress,
    totalPrice,
    paymentMethod,
    setPaymentMethod,
  };
};
