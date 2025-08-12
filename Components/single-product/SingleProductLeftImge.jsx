"use client";
import React, { useRef, useState } from "react";

const SingleProductLeftImge = () => {
  return (
    <div className="relative w-[46%] border border-gray-300 h-[520px] overflow-hidden rounded-md cursor-zoom-in">
      <img
        src={""}
        alt="Product"
        className={`w-full h-full object-cover transition-transform duration-300 
        `}
        draggable={false}
      />
    </div>
  );
};

export default SingleProductLeftImge;
