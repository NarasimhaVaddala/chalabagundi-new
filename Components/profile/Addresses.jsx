import { FormComponent } from "../Form/FormComponent";
import CustomButton from "@/utils/CustomButton";
import CustomInput from "@/utils/CustomInput";
import React from "react";
import z from "zod";

export default function Addresses({ updateAddress, address = {} }) {
  // Define validation schema
  const validation = z.object({
    houseNumber: z.string().min(1, "House number is required"),
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    country: z.string().min(1, "Country is required"),
    pincode: z
      .string()
      .min(6, "Enter valid pincode")
      .max(6, "Enter valid pincode"),
  });

  // Initialize form with FormComponent
  const { register, FormWrapper, errors, watch } = FormComponent({
    validations: validation,
    submitFn: updateAddress,
    defaultValues: {
      houseNumber: address.houseNumber || "",
      street: address.street || "",
      city: address.city || "",
      state: address.state || "",
      country: address.country || "",
      pincode: address.pincode || "",
    },
  });

  return (
    <div className="border p-6 rounded-md bg-white max-w-2xl">
      <h2 className="text-xl font-bold mb-2">Addresses</h2>
      <p className="text-gray-600 mb-6">
        The following addresses will be used on the checkout page by default.
      </p>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Billing Address</h3>

        <FormWrapper className="space-y-4">
          <CustomInput
            register={register}
            name="houseNumber"
            label="House Number"
            placeholder="123"
            error={errors.houseNumber}
          />
          <CustomInput
            register={register}
            name="street"
            label="Street"
            placeholder="Main St"
            error={errors.street}
          />
          <CustomInput
            register={register}
            name="city"
            label="City"
            placeholder="Dhaka"
            error={errors.city}
          />
          <CustomInput
            register={register}
            name="state"
            label="State"
            placeholder="Chattogram"
            error={errors.state}
          />
          <CustomInput
            register={register}
            name="country"
            label="Country"
            placeholder="Bangladesh"
            error={errors.country}
          />
          <CustomInput
            register={register}
            name="pincode"
            label="Pincode"
            placeholder="500050"
            error={errors.pincode}
            type="number"
          />

          <div className="pt-2">
            <CustomButton type="submit" label="Save Address" />
          </div>
        </FormWrapper>
      </div>
    </div>
  );
}
