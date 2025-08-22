"use client";
import React, { useRef, useState } from "react";

import { motion } from "framer-motion";
const SingleProductLeftImage = ({ image, setDisplayImg, singleItem }) => {
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
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="flex flex-col gap-2 w-full  md:w-[46%]">
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

      <motion.div
        variants={item}
        className="w-full flex flex-wrap items-center gap-1.5"
      >
        {singleItem?.image?.slice(0, 4)?.map((img, index) => (
          <span
            onClick={() => setDisplayImg(img)}
            key={index}
            className="cursor-pointer w-[80px] md:w-[120px] h-20 md:h-[150px] border border-gray-200"
          >
            <img
              src={img}
              className="w-full h-full"
              alt={`${singleItem.name} image ${index + 2}`}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default SingleProductLeftImage;
