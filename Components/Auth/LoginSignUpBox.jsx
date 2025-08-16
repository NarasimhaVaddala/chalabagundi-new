import CustomButton from "@/utils/CustomButton";
import CustomInput from "@/utils/CustomInput";
import { X } from "lucide-react";
import React from "react";

export default function LoginSignupBox({
  FormWrapper,
  errors,
  register,
  page,
  closeFn,
  otpSent,
  signUp,
}) {
  return (
    <div className="fixed top-0 left-0 h-[100vh] w-[100vw] bg-[rgba(158,149,149,0.5)] flex items-center justify-center z-50">
      <div className="p-5 text-black bg-white w-[50%] max-w-lg rounded-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={closeFn}
        >
          <X size={20} />
        </button>

        <FormWrapper className="mt-6">
          {/* Dynamic Title */}
          <h2 className="my-2 font-bold text-2xl">
            {signUp ? "CREATE ACCOUNT" : otpSent ? "VERIFY OTP" : "LOGIN"}
          </h2>

          {/* Mobile Number (Always First) */}
          <CustomInput
            error={errors.mobile}
            register={register}
            name="mobile"
            label="Mobile Number"
            type="tel"
            disabled={otpSent}
          />

          {/* OTP Field */}
          {otpSent && !signUp && (
            <CustomInput
              error={errors.otp}
              register={register}
              name="otp"
              label="Enter OTP"
              type="text"
            />
          )}

          {/* Sign Up Fields */}
          {signUp && (
            <>
              <CustomInput
                error={errors.name}
                register={register}
                name="name"
                label="Full Name"
                type="text"
              />
              <CustomInput
                error={errors.email}
                register={register}
                name="email"
                label="Email Address"
                type="email"
              />
            </>
          )}

          {/* Submit Button */}
          <div className="mt-6">
            <CustomButton
              type="submit"
              text={
                signUp
                  ? "Complete Sign Up"
                  : otpSent && !signUp
                  ? "Verify OTP"
                  : "Send OTP"
              }
              fullWidth
            />
          </div>

          {/* Global Error */}
          {errors.root && (
            <p className="mt-4 text-sm text-red-500">{errors.root.message}</p>
          )}
        </FormWrapper>
      </div>
    </div>
  );
}
