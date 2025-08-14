// SignUpForm.jsx
"use client";

import { API } from "@/core/url";
import React, { useState } from "react";

export default function SignUpForm({ mobile }) {
  const [loading, setLoading] = useState(false);
  const [signupData, setSignupData] = useState({
    mobile: mobile || "",
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
  };

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!signupData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (signupData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Email validation
    if (!signupData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(signupData.email)) {
      newErrors.email = "Email is invalid";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        await API.post("/auth/user-sign-up", signupData);
        // nagivate to address form or user profile -- ikkada nunchi chudu
      } catch (error) {
        showErrorMessage(
          error?.response?.data?.message || "Something went wrong"
        );
      }
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-7">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={signupData.name}
        onChange={handleChange}
        className={`border rounded px-4 py-2 w-full ${
          errors.name ? "border-red-500" : ""
        }`}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={signupData.email}
        onChange={handleChange}
        className={`border rounded px-4 py-2 w-full ${
          errors.email ? "border-red-500" : ""
        }`}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <button
        type="submit"
        className="bg-blue-500 text-white rounded py-2 mt-2"
      >
        Sign Up
      </button>
    </form>
  );
}
