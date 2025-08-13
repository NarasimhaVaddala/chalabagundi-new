"use client";
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 max-w-[45%] w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-gray-500 hover:text-gray-900 font-bold"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}
