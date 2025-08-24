import { useState } from "react";
import { useAuthHook } from "../Auth/UseAuthHook";
import { useDispatch, useSelector } from "react-redux";
import { API } from "@/core/url";
import { clearCart } from "@/Store/slice/cartSlice";
import {
  showAxiosError,
  showErrorMessage,
  showInfoMessage,
  showSuccessMessage,
} from "@/core/Toast";
import { useRouter } from "next/navigation";
import { fetchUserProfile } from "@/Store/slice/ProfileSlice";

export const useCartHook = ({
  selectedAddress,
  setAddressOpen,
  setAddressBoxOpen,
}) => {
  const { FormWrapper, errors, register, open, setOpen, otpSent, signUp } =
    useAuthHook();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + parseInt(item?.price?.replace(/[^0-9]/g, ""), 10) * item.quantity,
    0
  );
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const handleCheckOut = async () => {
    try {
      if (localStorage.getItem("token")) {
        if (!profile) {
          dispatch(fetchUserProfile());
        }

        if (profile?.address.length < 1) {
          showInfoMessage("Please Add Address to proceed");
          setAddressOpen(true);
          return;
        }
        if (!selectedAddress) {
          showInfoMessage("Please Select a Address");
          setAddressBoxOpen(true);
          return;
        }

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
          selectedAddress: selectedAddress._id,
        });
        showSuccessMessage("Order Placed");
        dispatch(clearCart());
      } else {
        setOpen(true);
      }
    } catch (error) {
      showAxiosError(error);
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
    paymentMethod,
    setPaymentMethod,
  };
};
