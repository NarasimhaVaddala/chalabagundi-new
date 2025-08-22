"use client";
import React, { useRef, useState } from "react";

const SingleProductLeftImage = ({ image }) => {
  const imgRef = useRef(null);
  const [zoom, setZoom] = useState(false);

  const currentImage =
    "https://htmldemo.net/mixy/mixy/assets/images/products/details/lg-1.jpg";

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;

    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    imgRef.current.style.transformOrigin = `${x}% ${y}%`;
  };

  return (
    <div className="flex flex-col  w-full  md:w-[46%]">
      {/* Main Image with Fixed Zoom */}
      <div
        className="relative border border-gray-300 h-[300px] md:h-[520px] p-5 md:p-[40px] overflow-hidden rounded-md cursor-zoom-in"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => {
          setZoom(false);
          if (imgRef.current) {
            imgRef.current.style.transformOrigin = "center center";
          }
        }}
      >
        {image && (
          <img
            ref={imgRef}
            src={image ?? currentImage}
            alt="Product"
            className={`w-full h-full object-cover transition-transform duration-200 ${
              zoom ? "scale-[2.5]" : "scale-100"
            }`}
            draggable={false}
          />
        )}
      </div>
    </div>
  );
};

export default SingleProductLeftImage;
