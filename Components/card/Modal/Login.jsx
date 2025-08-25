import { showErrorMessage } from "@/core/Toast";
import { API } from "@/core/url";
import React, { useState } from "react";

const Login = ({ setActiveTab, setMobile, isClose }) => {
  const [loginStep, setLoginStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({ mobile: "", otp: "" });

  const handleLoginNext = async (e) => {
    e.preventDefault();
    if (loginStep === 1 && loginData.mobile?.trim()?.length === 10) {
      setLoading(true);
      try {
        await API.post("/auth/send-otp", { mobile: loginData.mobile });
        setLoginStep(2);
      } catch (error) {
        showErrorMessage(
          error?.response?.data?.message || "Something went wrong"
        );
      }
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/auth/verify-otp", {
        mobile: loginData.mobile,
        otp: loginData?.otp,
      });
      localStorage.setItem("eToken", res?.data?.token);
      isClose(false);
    } catch (error) {
      if (error?.response?.data?.message === "User does not exist") {
        setActiveTab("signup");
        setMobile(loginData.mobile);
      }
      showErrorMessage(
        error?.response?.data?.message || "Something went wrong"
      );
    }
    setLoading(false);
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={loginStep === 1 ? handleLoginNext : handleLoginSubmit}
      className="flex flex-col gap-4 p-7"
    >
      <h2>Login</h2>
      {loginStep === 1 && (
        <>
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={loginData.mobile}
            onChange={handleLoginChange}
            className="border rounded px-4 py-2 w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded py-2 mt-2 cursor-pointer"
          >
            {loading ? "Loading...!" : "Send OTP"}
          </button>
        </>
      )}
      {loginStep === 2 && (
        <>
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={loginData.otp}
            onChange={handleLoginChange}
            className="border rounded px-4 py-2 w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded py-2 mt-2 cursor-pointer"
          >
            {loading ? "Loading...!" : "Verify Otp"}
          </button>
        </>
      )}
    </form>
  );
};

export default Login;
