"use client";
import { useAddressHook } from "@/Hooks/useAddressHook";
import React from "react";
import AddressCard from "./AddressCard";
import CustomButton from "@/Utils/CustomButton";
import AddressForm from "./AddressForm";
import Modal from "@/Utils/Modal";
import { AlertTriangle } from "lucide-react";

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
    openDeleteAddressModal,
    setOpenDeleteAddressModal,
  } = useAddressHook();

  return (
    <div>
      <div className="flex items-center justify-end mb-4">
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
              onDelete={() => setOpenDeleteAddressModal(e._id)}
              key={e._id}
              onEdit={handleEdit}
            />
          );
        })}
      </div>

      <Modal
        onClose={() => setOpenDeleteAddressModal(null)}
        isOpen={openDeleteAddressModal}
      >
        <div className="bg-white rounded-lg w-full p-4 lg:p-6 mx-4 lg:mx-0 max-w-md lg:max-w-none">
          <div className="w-full flex items-center justify-center">
            <div className="p-3 lg:p-4 bg-red-300 flex items-center justify-center rounded-full">
              <AlertTriangle size={24} className="lg:w-7 lg:h-7" />
            </div>
          </div>
          <h2 className="text-lg lg:text-xl font-semibold text-gray-800 text-center mt-4">
            Delete Address
          </h2>
          <p className="mt-3 text-gray-600 text-sm lg:text-base text-center lg:text-left">
            Are you sure you want to Delete this Address ? <br />
            This action cannot be undone.
          </p>

          <div className="mt-6 flex flex-col-reverse lg:flex-row justify-end gap-3">
            <CustomButton
              className=""
              text="Cancel"
              onClick={() => setOpenDeleteAddressModal(null)}
            />
            <CustomButton
              className="bg-red-500 hover:bg-red-600"
              text="Delete"
              onClick={() => handleDelete(openDeleteAddressModal)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
