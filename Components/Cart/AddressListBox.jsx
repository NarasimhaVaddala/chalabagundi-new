import CustomButton from "@/Utils/CustomButton";
import { Plus, X } from "lucide-react";
import React from "react";

export default function AddressListBox({
  selectedAddress,
  setAddressBoxOpen,
  addressList,
  setSelectedAddress,
  openAddressForm,
}) {
  return (
    <div className="fixed flex h-[100vh] w-[100vw] z-50 items-center justify-center top-0 left-0 bg-[rgba(0,0,0,0.5)]">
      <div className="bg-white mx-2 w-full lg:w-[50%] max-h-[80vh] overflow-y-auto p-4 rounded-sm shadow-lg flex flex-col gap-2">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold text-2xl">Select Address</h2>
          <button
            className="cursor-pointer"
            onClick={() => setAddressBoxOpen((prev) => !prev)}
          >
            <X />
          </button>
        </div>

        {addressList?.map((e) => (
          <Card
            key={e._id}
            address={e}
            isSelected={selectedAddress._id === e._id}
            setSelectedAddress={() => {
              setSelectedAddress(e);
              setAddressBoxOpen((prev) => !prev);
            }}
          />
        ))}

        <CustomButton
          text="Add New"
          className="w-fit self-end flex-row-reverse gap-2 text-sm"
          icon={<Plus size={15} />}
          onClick={() => {
            setAddressBoxOpen((prev) => !prev);
            openAddressForm();
          }}
        />
      </div>
    </div>
  );
}

function Card({ address, isSelected, setSelectedAddress }) {
  return (
    <div
      className={`my-1  cursor-pointer ${
        isSelected ? "ring-1  rounded-lg ring-blue-500" : ""
      }`}
      onClick={setSelectedAddress}
    >
      <div
        className={`flex items-center justify-between p-4 border rounded-lg shadow-sm transition-all duration-200 ${
          isSelected
            ? "border-blue-500 bg-blue-50"
            : "border-gray-200 bg-white hover:shadow"
        }`}
      >
        {/* Address Info */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            Delivery Address
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {address.housenumber}, {address.street}, {address.city},{" "}
            {address.state} - {address.pincode}
          </p>
          {address.landmark && (
            <p className="text-xs text-gray-500 mt-1">
              Landmark: {address.landmark}
            </p>
          )}
        </div>

        {/* Custom Radio Button */}
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            isSelected
              ? "border-blue-500 bg-blue-500"
              : "border-gray-400 hover:border-gray-600"
          }`}
        >
          {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
        </div>
      </div>
    </div>
  );
}
