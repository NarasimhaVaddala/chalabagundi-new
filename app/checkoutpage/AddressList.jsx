"use client";
import CustomButton from "@/Utils/CustomButton";
import { useRouter } from "next/navigation";
import React from "react";

export default function AddressList({
  addresses,
  selectedAddress,
  setSelectedAddress,
}) {
  const router = useRouter();
  console.log("addresses?.length", addresses?.length);

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Select Delivery Address
      </h2>
      <div className="space-y-4">
        {addresses?.map((address, index) => (
          <div
            key={address._id}
            className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
              selectedAddress === address?._id
                ? "border-blue-500 bg-blue-50 shadow-md"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onClick={() => setSelectedAddress(address?._id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="font-medium text-gray-900">
                  {address?.housenumber}
                </p>
                <p className="text-gray-700">{address?.street}</p>
                <p className="text-gray-700">
                  {address?.city} {address?.pincode}
                </p>
              </div>
              <div
                className={`mt-1 ml-4 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedAddress == address?._id
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-400"
                }`}
              >
                {selectedAddress == address?._id && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>
          </div>
        ))}

        {addresses?.length <= 0 && (
          <div className="flex items-center justify-center">
            <CustomButton
              text="Add Address"
              onClick={() => router.push("/profile")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
