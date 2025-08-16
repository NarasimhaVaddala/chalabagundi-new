"use client";
import PriceBox from "@/Components/Checkout/PriceBox";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddressList from "./AddressList";
import { useCheckOutPageHook } from "@/Hooks/cart/CheckoutpageHook";

const page = () => {
  const {
    profile,
    cartItems,
    handleCheckOut,
    selectedAddress,
    setSelectedAddress,
    totalPrice,
    paymentMethod,
    setPaymentMethod,
  } = useCheckOutPageHook();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AddressList
            addresses={profile?.address ?? []}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
          />

          <PriceBox
            addresses={profile?.address}
            totalPrice={totalPrice}
            itemsCount={cartItems?.length}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            handleCheckOut={handleCheckOut}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
