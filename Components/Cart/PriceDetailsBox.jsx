import Chip from "@/Utils/Chip";
import CustomButton from "@/Utils/CustomButton";
import { CreditCard, HandCoins } from "lucide-react";
import React from "react";

export default function PriceDetailsBox({
  price,
  checkout,
  paymentMethod,
  setPaymentMethod,
}) {
  return (
    <div className="sticky space-y-2 top-4 bg-white border border-gray-200 rounded-lg p-6 shadow-sm h-fit">
      <h3 className="text-lg font-medium mb-4">Order Summary</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹ {price}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>₹ 0</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>₹ {price}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Chip
          label={"Cash on delivery"}
          icon={HandCoins}
          active={paymentMethod == "cash"}
          onClick={() => setPaymentMethod("cash")}
        />
        <Chip
          label={"Pay now"}
          icon={CreditCard}
          active={paymentMethod == "upi"}
          onClick={() => setPaymentMethod("upi")}
        />
      </div>
      <CustomButton text="Place Order" onClick={checkout} />
    </div>
  );
}
