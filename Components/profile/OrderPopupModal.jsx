import { buildImageUrl } from "@/core/url";
import CustomButton from "@/Utils/CustomButton";
import React from "react";

export default function OrderPopupModal({ order, cancelOrder }) {
  if (!order) return null;

  const {
    _id,
    basePrice,
    discount,
    tax,
    totalPrice: price,
    status,
    stage,
    items = [],
  } = order;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-3xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Order Details - {_id}
      </h2>

      {/* Order Summary */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-gray-600">Status</p>
          <p className="text-green-800 font-semibold capitalize">{status}</p>
        </div>
        {/* <div>
          <p className="text-gray-600">Stage</p>
          <p className="text-green-800 font-semibold capitalize">{stage}</p>
        </div> */}
        {/* <div>
          <p className="text-gray-600">Base Price</p>
          <p className="text-green-800 font-semibold">₹{basePrice}</p>
        </div> */}
        <div>
          <p className="text-gray-600">Tax</p>
          <p className="text-green-800 font-semibold">₹{tax || 0}</p>
        </div>
        <div>
          <p className="text-gray-600">Discount</p>
          <p className="text-green-800 font-semibold">₹{discount || 0}</p>
        </div>
        <div>
          <p className="text-gray-600">Total</p>
          <p className="text-green-900 font-bold text-lg">₹{price}</p>
        </div>
      </div>

      {/* Items List */}
      <div>
        <h3 className="text-xl font-semibold text-green-700 mb-3">
          Items ({items.length})
        </h3>
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div
              key={item._id || idx}
              className="p-4 border rounded-lg bg-green-50 flex justify-between items-start gap-4"
            >
              {/* Text Content */}
              <div className="flex-1">
                <p className="text-lg font-medium text-green-900">
                  {item.name}
                </p>
                <p className="text-gray-600 text-sm mb-1">{item.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-green-800 mt-2">
                  <span>Price: ₹{item.price}</span>
                  <span>Quantity: {item.qty}</span>
                  <span>Total: ₹{item.price * item.qty}</span>
                </div>
              </div>

              {/* Image */}
              {item.images.length > 0 && (
                <img
                  src={buildImageUrl(item.product?.images[0])}
                  alt={item.product.title}
                  className="w-24 h-24 object-cover rounded-lg shadow-md border border-green-200"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {status !== "cancelled" && (
        <CustomButton
          type="button"
          text="Cancel Order"
          onClick={() => cancelOrder(order._id)}
        />
      )}
    </div>
  );
}
