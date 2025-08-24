"use client";
import { FormComponent } from "@/Components/Form/FormComponent";
import { useState } from "react";
import {
  mobileValidation,
  otpValidation,
  signUpValidation,
} from "./AuthValidations";
import { SendOtp, SignUp, VerifyOtp } from "./AuthServices";
import { useDispatch } from "react-redux";
import { fetchUserProfile } from "@/Store/slice/ProfileSlice";
import { showSuccessMessage } from "@/core/Toast";

export const useAuthHook = () => {
  const [open, setOpen] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [signUp, setSignup] = useState(false);

  // Track current step/schema
  const [validations, setValidations] = useState(mobileValidation);

  const dispatch = useDispatch();

  const { FormWrapper, errors, register, setError, reset } = FormComponent({
    defaultValues: { mobile: "", otp: "", name: "", email: "" },
    validations: validations,
    submitFn: async (data) => {
      console.log(data);

      try {
        if (signUp) {
          // Final step: Submit full sign-up
          const resp = await SignUp(data);
          if (resp.success) {
            localStorage.setItem("token", resp.payload.token);
            setOpen(false); // Close modal on success
            showSuccessMessage("Signed up successfully!");
            dispatch(fetchUserProfile());
          } else {
            setError("root", { message: "Sign-up failed. Try again." });
          }
          return;
        }

        if (!otpSent) {
          // Step 1: Send OTP
          const resp = await SendOtp({ mobile: data.mobile });
          if (resp.success) {
            setOtpSent(true);
            setValidations(otpValidation);
            reset({ ...data }); // keep mobile, clear others
            showSuccessMessage("OTP sent!");
          } else {
            setError("mobile", { message: "Failed to send OTP" });
          }
        } else if (otpSent && !signUp) {
          // Step 2: Verify OTP
          const resp = await VerifyOtp({
            mobile: data.mobile,
            otp: data.otp,
          });

          if (resp.success) {
            if (resp.alreadyExists) {
              // Existing user → log in
              localStorage.setItem("token", resp.payload.token);
              setOpen(false);
              showSuccessMessage("Logged in!");
              dispatch(fetchUserProfile());
            } else {
              // New user → go to sign-up
              setSignup(true);
              setValidations(signUpValidation);
              reset({ mobile: data.mobile }); // keep mobile, clear otp
            }
          } else {
            // Only real failures (e.g., network, invalid OTP format, etc.)
            setError("otp", {
              message: "Failed to verify OTP. Please try again.",
            });
          }
        }
      } catch (err) {
        console.log(err, "FROM UNEXPECTED ERROR");

        setError("root", { message: "An unexpected error occurred." });
      }
    },
  });

  return {
    FormWrapper,
    errors,
    register,
    open,
    setOpen,
    otpSent,
    setOtpSent,
    signUp,
    setSignup,
  };
};
