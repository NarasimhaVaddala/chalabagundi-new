"use client";

import React, { useState, useEffect, useRef } from "react";
const DualRangeSlider = ({ min = 0, max = 2000, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const range = useRef(null);

  // Convert to % for CSS styling the track fill
  const getPercent = (value) => Math.round(((value - min) / (max - min)) * 100);

  // Update range track fill color between handles
  useEffect(() => {
    if (range.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxVal);

      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal]);

  // Call onChange when values change
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="relative w-full h-10">
      {/* Slider track */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-2 bg-gray-300 rounded" />
      {/* Range fill */}
      <div
        ref={range}
        className="absolute top-1/2 transform -translate-y-1/2 h-2 bg-[#179958] rounded"
        style={{ left: "0%", width: "100%" }}
      />

      {/* Min handle */}
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(e) => {
          const val = Math.min(Number(e.target.value), maxVal - 1);
          setMinVal(val);
        }}
        className="absolute w-full pointer-events-none appearance-none bg-transparent"
        style={{ zIndex: minVal > max - 100 ? 5 : undefined }}
      />
      {/* Max handle */}
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(e) => {
          const val = Math.max(Number(e.target.value), minVal + 1);
          setMaxVal(val);
        }}
        className="absolute w-full pointer-events-none appearance-none bg-transparent"
      />

      {/* Custom styles for inputs */}
      <style jsx>{`
        input[type="range"] {
          -webkit-appearance: none;
          height: 2rem;
          width: 100%;
          pointer-events: auto;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #179958;
          cursor: pointer;
          margin-top: -9px;
          position: relative;
          z-index: 10;
          border: 2px solid white;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        }
        input[type="range"]::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #179958;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default DualRangeSlider;
