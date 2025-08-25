"use client";
import { showAxiosError, showSuccessMessage } from "@/core/Toast";
import { API } from "@/core/url";
import { clearCart } from "@/Store/slice/cartSlice";
import { clearProfile, fetchUserProfile } from "@/Store/slice/ProfileSlice";
import { clearWishlist } from "@/Store/slice/wishlistSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const userProfileHook = () => {
  const [orders, setOrders] = useState([]);
  const [active, setActive] = useState("Orders");
  const dispatch = useDispatch();

  const router = useRouter();

  const [selectedOrder, setSelectedOrder] = useState(null);

  const { profile } = useSelector((state) => state.profile);

  const [openCancelModal, setOpenCancelModal] = useState(false);

  async function getOrders() {
    try {
      const resp = await API.get("/orders/all-orders");

      setOrders(resp.data);
    } catch (error) {
      showAxiosError(error);
    }
  }

  async function cancelOrder() {
    try {
      const resp = await API.put(`/orders/cancel-order/${selectedOrder._id}`);
      getOrders();
      showSuccessMessage("Order Cancelled");
      setSelectedOrder(null);
      setOpenCancelModal(false);
    } catch (error) {
      showAxiosError(error);
    }
  }

  async function updateProfile(data) {
    try {
      const resp = await API.put("/auth/edit-profile", data);

      showSuccessMessage("Updated Success");
    } catch (error) {
      showAxiosError(error);
    }
  }

  async function updateAddress(data) {
    try {
      const resp = await API.put("/auth/profile", { address: data });

      showSuccessMessage("Updated Success");
    } catch (error) {
      showAxiosError(error);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    showSuccessMessage("You have been logged out.");
    dispatch(clearCart());
    dispatch(clearWishlist());
    dispatch(clearProfile());
    router.push("/");
    // window.location.href = "/login"; // uncomment for redirect
  };

  useEffect(() => {
    getOrders();
    dispatch(fetchUserProfile());
  }, []);

  return {
    orders,
    active,
    setActive,
    handleLogout,
    setSelectedOrder,
    selectedOrder,
    cancelOrder,
    profile,
    updateProfile,
    updateAddress,
    openCancelModal,
    setOpenCancelModal,
  };
};
