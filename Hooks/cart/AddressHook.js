"use client";

import { showAxiosError, showSuccessMessage } from "@/core/Toast";
import { API } from "@/core/url";
import { fetchUserProfile } from "@/Store/slice/ProfileSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import z from "zod";

export const useAddressHook = () => {
  const validation = z.object({
    housenumber: z.string().min(1, "House number is required"),
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
    pincode: z
      .string()
      .min(6, "Enter valid pincode")
      .max(6, "Enter valid pincode"),
    _id: z.string().optional(),
    landmark: z.string().optional(),
  });

  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [addressOpen, setAddressOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(
    profile?.address?.[0] || null
  );

  const [addressBoxOpen, setAddressBoxOpen] = useState(false);

  console.log(addressBoxOpen, "address-box");

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profile?.address?.length > 0) {
      setSelectedAddress(profile?.address?.[0]);
    }
  }, [profile]);

  async function handleSubmit(data) {
    console.log(data);

    try {
      if (data._id) {
        const resp = await API.put(`/auth/edit-address/${data._id}`, data);
        showSuccessMessage("Updated Address");
        // handleClose();
      } else {
        const resp = await API.post("/auth/add-address", data);
        showSuccessMessage("Added New Address");
        // handleClose();
      }

      setAddressOpen(false);
    } catch (error) {
      showAxiosError(error);
    } finally {
      dispatch(fetchUserProfile());
    }

    // console.log(data);
  }

  return {
    profile,
    selectedAddress,
    addressOpen,
    setAddressOpen,
    handleSubmit,
    validation,
    addressBoxOpen,
    setAddressBoxOpen,
    setSelectedAddress,
  };
};
