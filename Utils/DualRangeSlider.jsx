"use client";
import React, { useEffect, useRef } from "react";

const DualRangeSlider = ({ min = 0, max = 2000, value, onChange }) => {
  const range = useRef(null);
  const { min: minVal, max: maxVal } = value;

  const getPercent = (val) => Math.round(((val - min) / (max - min)) * 100);

  useEffect(() => {
    if (range.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxVal);
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, min, max]);

  return (
    <div className="relative w-full h-10">
      {/* Track background */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-2 bg-gray-300 rounded" />

      {/* Selected range highlight */}
      <div
        ref={range}
        className="absolute top-1/2 transform -translate-y-1/2 h-2 bg-[#179958] rounded"
      />

      {/* Min slider */}
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(e) => {
          const val = Math.min(Number(e.target.value), maxVal - 1);
          onChange({ min: val, max: maxVal });
        }}
        className="absolute w-full bg-transparent pointer-events-auto appearance-none"
        style={{ zIndex: minVal > max - 100 ? 5 : 3 }}
      />

      {/* Max slider */}
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(e) => {
          const val = Math.max(Number(e.target.value), minVal + 1);
          onChange({ min: minVal, max: val });
        }}
        className="absolute w-full bg-transparent pointer-events-auto appearance-none"
      />

      {/* Slider styles */}
      <style jsx>{`
        input[type="range"] {
          -webkit-appearance: none;
          height: 2rem;
          background: transparent;
          position: absolute;
          top: 0;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #179958;
          cursor: pointer;
          border: 2px solid white;
          position: relative;
          z-index: 10;
        }
        input[type="range"]::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #179958;
          cursor: pointer;
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
};

export default DualRangeSlider;
