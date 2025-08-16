"use client";
import { showErrorMessage, showSuccessMessage } from "@/core/Toast";
import { API } from "@/core/url";
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    setSuccess("");

    try {
      await API.post("/contact", form);
      setForm({ name: "", email: "", phone: "", message: "" });
      showSuccessMessage("Submitted..!");
    } catch (error) {
      showErrorMessage("Error sending message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={form.name}
          onChange={handleChange}
          className={`w-full border p-4 rounded-md focus:outline-none ${
            errors.name
              ? "border-red-500"
              : "border-gray-300 focus:border-green-500"
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
          className={`w-full border p-4 rounded-md focus:outline-none ${
            errors.email
              ? "border-red-500"
              : "border-gray-300 focus:border-green-500"
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          value={form.mobile}
          onChange={handleChange}
          className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:border-green-500"
        />
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Message *"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className={`w-full border p-4 rounded-md focus:outline-none ${
            errors.message
              ? "border-red-500"
              : "border-gray-300 focus:border-green-500"
          }`}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="mt-2 text-center text-green-600 font-medium">{success}</p>
      )}
    </form>
  );
};

export default ContactForm;
