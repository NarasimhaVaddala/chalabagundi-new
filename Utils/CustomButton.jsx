import React from "react";

export default function CustomButton({
  text = "submit",
  type = "button",
  onClick = () => {},
  className = "w-full",
  icon,
}) {
  return (
    <button
      type={type}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      className={`${className} cursor-pointer
        px-4 py-2 my-2 text-white rounded-lg text-center font-medium transition-colors duration-200 
       bg-[#179957] hover:bg-[#184d47] flex items-center justify-center
       `}
    >
      <span>{text}</span>
      {icon && icon}
    </button>
  );
}
