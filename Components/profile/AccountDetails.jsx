import { FormComponent } from "../Form/FormComponent";
import CustomButton from "@/Utils/CustomButton";
import CustomInput from "@/Utils/CustomInput";
import React, { useState } from "react";
import z from "zod";

export default function AccountDetails({ profile, updateProfile }) {
  const validation = z.object({
    name: z.string().min(3, "Enter valid Name"),
    email: z.string().email({ message: "Enter valid email" }),
    mobile: z
      .string()
      .min(10, { message: "Enter a valid 10 digit mobile number" })
      .max(10, { message: "Enter a valid 10 digit mobile number" }),
  });

  const { register, FormWrapper, errors, watch } = FormComponent({
    validations: validation,
    submitFn: updateProfile,
    defaultValues: profile,
  });

  return (
    <div className="bg-white border p-6 rounded-md max-w-2xl">
      <h2 className="text-xl font-bold mb-2">Account Details</h2>
      <hr className="mb-4" />

      <FormWrapper className="space-y-4">
        <CustomInput
          register={register}
          name={"name"}
          label={"Name"}
          placeholder="John Doe"
          error={errors.name}
        />
        <CustomInput
          register={register}
          name={"email"}
          label={"Email"}
          placeholder="JohnDoe@example.com"
          error={errors.email}
        />
        <CustomInput
          register={register}
          name={"mobile"}
          label={"Mobile"}
          type="number"
          placeholder="9999999999"
          error={errors.mobile}
        />

        <CustomButton type="submit" />
      </FormWrapper>
    </div>
  );
}
