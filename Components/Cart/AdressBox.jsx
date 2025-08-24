import { useAddressHook } from "@/Hooks/cart/AddressHook";
import React from "react";

export default function AdressBox({
  selectedAddress,
  setAddressOpen,
  addressOpen,
  addressBoxOpen,
  setAddressBoxOpen,
}) {
  if (!selectedAddress) {
    return (
      <div className="w-full p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50 flex items-center justify-between">
        <p className="text-sm text-gray-500">No address available</p>
        <button
          onClick={() => setAddressOpen(!addressOpen)}
          className="ml-4 cursor-pointer px-3 py-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 text-xs font-medium rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Add
        </button>
      </div>
    );
  }

  return (
    <div className="w-full  mx-auto">
      <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow transition-shadow duration-200 ease-in-out">
        {/* Address Info */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            Delivery Address
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {selectedAddress.housenumber}, {selectedAddress.street},{" "}
            {selectedAddress.city}, {selectedAddress.state} -{" "}
            {selectedAddress.pincode}
          </p>
          {selectedAddress.landmark && (
            <p className="text-xs text-gray-500 mt-1">
              Landmark: {selectedAddress.landmark}
            </p>
          )}
        </div>

        <button
          onClick={() => {
            setAddressBoxOpen(!addressBoxOpen);
          }}
          className="ml-4 cursor-pointer px-3 py-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 text-xs font-medium rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Change
        </button>
      </div>
    </div>
  );
}
