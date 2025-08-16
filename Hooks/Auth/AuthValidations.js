import z from "zod";

export const mobileValidation = z.object({
  mobile: z
    .string()
    .min(10, "Enter a valid 10 digit mobile")
    .max(10, "Enter a valid 10 digit mobile"),
});

export const otpValidation = z.object({
  mobile: z
    .string()
    .min(10, "Enter a valid 10 digit mobile")
    .max(10, "Enter a valid 10 digit mobile"),
  otp: z
    .string()
    .min(6, "Enter a valid 6 digit otp")
    .max(6, "Enter a valid 6 digit otp"),
});

export const signUpValidation = z.object({
  mobile: z
    .string()
    .min(10, "Enter a valid 10 digit mobile")
    .max(10, "Enter a valid 10 digit mobile"),
  name: z.string().min(3, "Enter a valid Name"),
  email: z.email("Enter a valid email"),
});
