import React from "react";
import GoogleMapLocationPicker from "./GoogleMap";
import CustomInput from "@/Utils/CustomInput";
import CustomButton from "@/Utils/CustomButton";
import { X } from "lucide-react";

export default function AddressForm({
  FormWrapper,
  errors,
  register,
  coordinates,
  setCoordinates,
  setOpen,
}) {
  return (
    <div className="fixed h-[100vh] flex items-center justify-center w-[100vw] bg-[rgba(0,0,0,0.5)] z-50 p-2 md:p-8 top-0 left-0 overflow-y-scroll">
      <div className="w-full md:w-[50%] bg-white rounded-xl p-2">
        <div className="flex items-center justify-between">
          <h2 className="my-2 font-bold text-2xl">Select Location on map</h2>
          <button className="cursor-pointer" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>
        {/* <GoogleMapLocationPicker
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      /> */}

        <FormWrapper>
          {errors?.root && (
            <span className="text-red-500 text-sm">
              {errors?.root?.message}
            </span>
          )}
          <CustomInput
            type="text"
            error={errors.housenumber}
            label={"House Number"}
            name={"housenumber"}
            register={register}
          />
          <CustomInput
            type="text"
            error={errors.street}
            label={"Street Number"}
            name={"street"}
            register={register}
          />
          <CustomInput
            type="text"
            error={errors.landmark}
            label={"Land Mark"}
            name={"landmark"}
            register={register}
          />
          <CustomInput
            type="text"
            error={errors.city}
            label={"City Or District"}
            name={"city"}
            register={register}
          />
          <CustomInput
            type="text"
            error={errors.pincode}
            label={"Pincode"}
            name={"pincode"}
            register={register}
          />

          <CustomButton type="submit" />
        </FormWrapper>
      </div>
    </div>
  );
}
