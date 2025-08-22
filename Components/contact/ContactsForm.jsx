import {
  showAxiosError,
  showErrorMessage,
  showSuccessMessage,
} from "@/core/Toast";
import { API } from "@/core/url";
import CustomButton from "@/Utils/CustomButton";
import CustomInput from "@/Utils/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export default function ContactsForm() {
  const validations = z.object({
    name: z.string().min(3, { message: "Enter a valid name" }),
    email: z.string().email({ message: "Enter valid email" }),
    mobile: z
      .string()
      .min(10, { message: "Enter a valid 10 digit mobile number" })
      .max(10, { message: "Enter a valid 10 digit mobile number" }),
    message: z.string().min(3, { message: "Enter a valid message" }),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validations),
  });

  async function submitForm(form) {
    try {
      await API.post("/contact", form);
      reset();
      showSuccessMessage("Submitted..!");
    } catch (error) {
      showAxiosError(error);
    }
  }

  return (
    <div className="w-full px-4 py-6 flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
      {/* Left: Form (wider) */}
      <form
        onSubmit={handleSubmit(submitForm)}
        className="w-full lg:w-2/3 space-y-4"
      >
        {["name", "email", "mobile", "message"].map((field) => (
          <CustomInput
            key={field}
            name={field}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            placeholder={`Enter Your ${field}`}
            register={register}
            error={errors[field]}
            type={field === "mobile" ? "number" : "text"}
          />
        ))}
        <CustomButton type="submit" text="Submit Feedback" />
      </form>

      {/* Right: Compact Card Container (near-square rectangle) */}
      <div className="w-full lg:w-1/3 lg:max-w-xs mx-auto lg:mx-0">
        {/* Card 1 */}
        <div className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Our Commitment
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            We are dedicated to providing excellent customer service and timely
            responses. Your feedback helps us improve and serve you better every
            day.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Get in Touch
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Have questions or suggestions? Reach out via the form or contact
            support. We’re always happy to assist and value your input.
          </p>
        </div>
      </div>
    </div>
  );
}
