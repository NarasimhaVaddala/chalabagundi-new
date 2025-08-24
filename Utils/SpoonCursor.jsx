"use client";
import { useEffect, useState } from "react";

const SpoonCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Hide default cursor
    document.body.style.cursor = "none";
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.style.cursor = "default";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Global style to hide cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom spoon cursor */}
      {isVisible && (
        <img
          src="/spoon.png"
          alt="spoon cursor"
          style={{
            position: "fixed",
            left: mousePosition.x - 10, // Positions tip of spoon at cursor
            top: mousePosition.y - 50,
            pointerEvents: "none",
            zIndex: 10000,
            width: "64px", // Adjust size as needed
            height: "64px", // Adjust size as needed
            userSelect: "none",
            // transform: "rotate(-45deg)", // Remove if your image is already oriented correctly
          }}
        />
      )}
    </>
  );
};

export default SpoonCursor;
