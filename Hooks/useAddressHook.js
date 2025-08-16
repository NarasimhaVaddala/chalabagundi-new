"use client";

import { FormComponent } from "@/Components/Form/FormComponent";
import {
  showAxiosError,
  showErrorMessage,
  showSuccessMessage,
} from "@/core/Toast";
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
  });

  const { FormWrapper, errors, register, setError, watch, reset } =
    FormComponent({
      defaultValues: undefined,
      validations: validation,
      submitFn: handleSubmit,
    });
  const { profile } = useSelector((state) => state.profile);
  const [coordinates, setCoordinates] = useState(null);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, []);

  const handleEdit = (data) => {
    reset(data);
    setCoordinates({ lat: data?.lat, lng: data?.lng });
    setOpen(true);
  };

  async function handleSubmit(data) {
    if (!coordinates) {
      showErrorMessage("Please Select coordinates on map");
      setError("root", { message: "Please select coordinates on map" });
      return;
    }

    const submitingdata = {
      ...data,
      ...coordinates,
    };

    console.log(submitingdata);

    try {
      if (data._id) {
        const resp = await API.put(
          `/auth/edit-address/${data._id}`,
          submitingdata
        );
        showSuccessMessage("Updated Address");
        handleClose();
      } else {
        const resp = await API.post("/auth/add-address", submitingdata);
        showSuccessMessage("Added New Address");
        handleClose();
      }

      setOpen(false);
    } catch (error) {
      showAxiosError(error);
    } finally {
      dispatch(fetchUserProfile());
    }

    // console.log(data);
  }

  const handleClose = () => {
    reset({
      housenumber: "",
      city: "",
      pincode: "",
      street: "",
    });
    setOpen(!open);
  };

  async function handleDelete(id) {
    try {
      const resp = await API.delete(`/auth/delete-address/${id}`);
      showSuccessMessage("Removed Address from list");
    } catch (error) {
      showAxiosError(error);
    } finally {
      dispatch(fetchUserProfile());
    }
  }

  return {
    profile,
    open,
    setOpen,
    FormWrapper,
    register,
    errors,
    coordinates,
    setCoordinates,
    handleEdit,
    handleClose,
    handleDelete,
  };
};
