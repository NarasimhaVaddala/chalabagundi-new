"use client";
import { X } from "lucide-react";
import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 inset-0 z-50 flex items-center justify-center bg-black/70 bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 w-full md:max-w-[45%]  relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-gray-500 hover:text-gray-900 font-bold"
        >
          <X />
        </button>

        {children}
      </div>
    </div>
  );
}
