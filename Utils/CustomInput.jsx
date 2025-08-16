import React, { useId } from "react";

export default function CustomInput({
  type = "text",
  placeholder = "",
  name,
  label,
  register,
  required = false,
  error, // Optional: to show error messages
  disabled = false,
}) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      {/* Label */}
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 transition-colors duration-200"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Input */}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        disabled={disabled}
        className={`
          px-4 py-3 rounded-lg border 
          transition-all duration-200 ease-in-out
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
          border-gray-300 hover:border-gray-400
          outline-none
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? "border-red-500 focus:ring-red-500" : ""}
          text-gray-900 placeholder-gray-400
        `}
      />

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-xs mt-1">
          {typeof error === "string" ? error : error.message}
        </p>
      )}
    </div>
  );
}
