import { showAxiosError, showSuccessMessage } from "@/core/Toast";
import { API } from "@/core/url";

export const SendOtp = async (mobile) => {
  let data = {
    payload: null,
    error: null,
    success: null,
  };
  try {
    const resp = await API.post(`/auth/send-otp`, mobile);
    data.payload = resp.data;
    data.success = true;
    showSuccessMessage("Otp Sent");
  } catch (error) {
    data.error = error;
    data.success = false;

    showAxiosError(error);
  } finally {
    return data;
  }
};
// AuthServices.js
export const VerifyOtp = async (mobileOtp) => {
  let data = {
    payload: null,
    error: null,
    success: false,
    alreadyExists: true, // true = user exists, false = new user
  };

  try {
    const resp = await API.post("/auth/verify-otp", mobileOtp);
    // 2xx response → user exists
    data.success = true;
    data.alreadyExists = true;
    data.payload = resp.data;
    showSuccessMessage("OTP Verified!");
  } catch (error) {
    if (error.response?.status === 404) {
      // ✅ User does NOT exist → allow sign-up
      data.success = true; // ← THIS IS KEY: treat 404 as SUCCESS for flow
      data.alreadyExists = false;
      showSuccessMessage("User not found. Please sign up.");
    } else {
      // Real error: invalid OTP, network, etc.
      data.success = false;
      data.error = error;
      data.alreadyExists = true; // arbitrary, won't be used
      showAxiosError(error);
    }
  } finally {
    return data;
  }
};

export const SignUp = async (fulldata) => {
  let data = {
    payload: null,
    error: null,
    success: false,
  };
  try {
    const resp = await API.post("/auth/user-sign-up", fulldata);
    data.payload = resp.data;
    data.success = true;
  } catch (error) {
    data.error = error;

    showAxiosError(error);
  } finally {
    return data;
  }
};
