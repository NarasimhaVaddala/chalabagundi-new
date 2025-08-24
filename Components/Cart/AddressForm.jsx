import React from "react";
import { FormComponent } from "../Form/FormComponent";
import CustomInput from "@/Utils/CustomInput";
import CustomButton from "@/Utils/CustomButton";
import { X } from "lucide-react";

export default function AddressForm({ submitFn, validation, setAddressOpen }) {
  const { FormWrapper, errors, register } = FormComponent({
    submitFn,
    validations: validation,
  });
  return (
    <FormWrapper className={"space-y-2"}>
      <div className="my-2 border-b border-gray-400 w-full flex items-center justify-between">
        <h2 className="font-bold text-xl ">Add New Address</h2>
        <button onClick={setAddressOpen}>
          <X />
        </button>
      </div>
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
        placeholder="Near Xyz school"
        label={"Landmark"}
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
      <CustomButton type="Submit" />
    </FormWrapper>
  );
}
