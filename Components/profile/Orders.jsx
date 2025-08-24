import React, { useState } from "react";

const Orders = ({ orders, setSelectedOrder }) => {
  return (
    <div className="">
      <div className="overflow-x-auto rounded border">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">Order</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Total</th>
              <th className="text-left px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order._id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{order._id}</td>
                <td className="px-4 py-2">{order.status}</td>
                <td className="px-4 py-2">Rs.{order.totalPrice}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="bg-green-600 text-white rounded px-3 py-1 hover:bg-green-700"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
