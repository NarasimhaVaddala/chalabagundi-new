import Link from "next/link";
import React from "react";

const EmptyComponent = ({ text = "Wishlist" }) => {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-semibold text-gray-600 mb-4">
        Your {text} is empty
      </h3>
      <p className="text-gray-500 mb-6">Add some items to your {text}.</p>
      <Link
        href={"/"}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyComponent;
