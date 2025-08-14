"use client";
import { useAddressHook } from "@/Hooks/useAddressHook";
import React from "react";
import AddressCard from "./AddressCard";
import CustomButton from "@/Utils/CustomButton";
import AddressForm from "./AddressForm";

export default function NewAddress() {
  const {
    profile,
    FormWrapper,
    errors,
    open,
    register,
    setOpen,
    coordinates,
    setCoordinates,
    handleEdit,
    handleClose,
    handleDelete,
  } = useAddressHook();

  return (
    <div>
      <div className="flex items-center justify-end">
        <CustomButton
          className={"w-[100px]"}
          onClick={handleClose}
          text="Add New"
        />
      </div>

      <div className="space-y-2">
        {open && (
          <AddressForm
            FormWrapper={FormWrapper}
            errors={errors}
            register={register}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setOpen={setOpen}
          />
        )}

        {profile?.address?.map((e) => {
          return (
            <AddressCard
              address={e}
              onDelete={handleDelete}
              key={e._id}
              onEdit={handleEdit}
            />
          );
        })}
      </div>
    </div>
  );
}
