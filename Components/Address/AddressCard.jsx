import { Pencil, Trash } from "lucide-react";
import React from "react";

export default function AddressCard({ address, onEdit, onDelete }) {
  const { housenumber, street, city, pincode, state, primary, _id } = address;

  return (
    <div className="relative w-full border border-gray-300 rounded-lg p-5 shadow-sm bg-white hover:shadow transition-shadow duration-200">
      {/* Flex container to align content horizontally */}
      <div className="flex items-start justify-between w-full relative">
        {/* Left: Address Details */}
        <div className="flex-1">
          <p className="font-semibold text-gray-800">
            {housenumber}, {street}
          </p>
          <p className="text-gray-600">{city}</p>
          <p className="text-gray-600">
            {state} - {pincode}
          </p>
        </div>

        {/* Right: Actions & Badge */}
        <div className="flex flex-col items-end ml-4 space-y-2 relative">
          {/* Edit & Delete Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => onEdit(address)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
            >
              <Pencil />
            </button>
            <button
              onClick={() => onDelete(_id)}
              className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
            >
              <Trash />
            </button>
          </div>
        </div>
      </div>
      {primary && (
        <span className="absolute bottom-2 right-2 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
          Primary
        </span>
      )}
    </div>
  );
}
