import CustomButton from "@/Utils/CustomButton";
import { CreditCard, HandCoins } from "lucide-react";
import React from "react";

export default function PriceBox({
  totalPrice,
  itemsCount,
  addresses,
  paymentMethod,
  setPaymentMethod,
  handleCheckOut,
}) {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Order Summary
        </h2>
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Items ({itemsCount})</span>
          <span>₹ {totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-4">
          <span>Shipping</span>
          <span className="text-green-600">Free</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-lg font-semibold text-gray-900 mb-6">
          <span>Total</span>
          <span>₹ {totalPrice.toFixed(2)}</span>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 my-4">
          Select Payment Method
        </h2>
        <div className="flex items-center gap-2">
          <Chip
            label={"Cash"}
            icon={HandCoins}
            active={paymentMethod == "cash"}
            onClick={() => setPaymentMethod("cash")}
          />
          <Chip
            label={"Online Payment"}
            icon={CreditCard}
            active={paymentMethod == "upi"}
            onClick={() => setPaymentMethod("upi")}
          />
        </div>

        {addresses.length > 0 && (
          <CustomButton text="Proceed to Payment" onClick={handleCheckOut} />
        )}
      </div>
    </div>
  );
}

function Chip({ active, icon: Icon, label, onClick }) {
  return (
    <button
      className={`cursor-pointer
        flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
        ${
          active
            ? "bg-green-600 text-white"
            : "border-2 border-green-600 text-green-600 bg-transparent hover:bg-green-50"
        }
      `}
      onClick={onClick}
    >
      {Icon && <Icon />}
      <span>{label}</span>
    </button>
  );
}
