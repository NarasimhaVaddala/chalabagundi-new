"use client";
import React, { useState } from "react";
import Orders from "@/Components/profile/Orders";
import AccountDetails from "@/Components/profile/AccountDetails";
import { userProfileHook } from "@/Hooks/UserProfileHook";
import Sidebar from "@/Components/profile/Sidebar";
import OrderPopupModal from "@/Components/profile/OrderPopupModal";
import NewAddress from "@/Components/Address/NewAddress";
import Modal from "@/Utils/Modal";
import CustomButton from "@/Utils/CustomButton";
import { AlertTriangle } from "lucide-react";
import CartLayout from "@/Components/Checkout/CartLayout";

const menuItems = ["Dashboard", "Orders", "Addresses", "Account Details"];

export default function page() {
  const {
    active,
    handleLogout,
    orders,
    setActive,
    selectedOrder,
    setSelectedOrder,
    cancelOrder,
    profile,
    updateProfile,
    updateAddress,
    openCancelModal,
    setOpenCancelModal,
  } = userProfileHook();

  return (
    <div className="min-h-screen flex p-4 ">
      <Sidebar
        menuItems={menuItems}
        setActive={setActive}
        handleLogout={handleLogout}
        active={active}
      />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold text-gray-800">{active}</h1>
        <hr className="my-4" />

        {active === "Dashboard" && (
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            From your account dashboard, you can easily check & view your recent
            orders, manage your shipping and billing addresses and edit your
            password and account details.
          </p>
        )}
        {active === "Orders" &&
          (selectedOrder ? (
            <OrderPopupModal
              order={selectedOrder}
              cancelOrder={() => setOpenCancelModal(true)}
            />
          ) : (
            <Orders
              orders={orders}
              selectedOrder={selectedOrder}
              setSelectedOrder={setSelectedOrder}
            />
          ))}

        {active === "Addresses" && <NewAddress />}
        {/* {active === "Addresses" && <GoogleMapLocationPicker />} */}
        {active === "Account Details" && (
          <AccountDetails profile={profile} updateProfile={updateProfile} />
        )}

        <CartLayout />
      </main>

      <Modal onClose={() => setOpenCancelModal(false)} isOpen={openCancelModal}>
        <div className="bg-white rounded-lg  w-full p-6">
          <div className="w-full flex items-center justify-center">
            <div className="p-4 bg-red-300 flex items-center justify-center rounded-full">
              <AlertTriangle size={30} />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            Cancel Order
          </h2>
          <p className="mt-3 text-gray-600 e">
            Are you sure you want to cancel order{" "}
            <strong>#{selectedOrder?._id}</strong>? This action cannot be
            undone.
          </p>

          <div className="mt-6 flex justify-end gap-3">
            <CustomButton
              className="bg-red-500 hover:bg-red-600"
              text="Cancel Order"
              onClick={cancelOrder}
            />
            <CustomButton
              className=""
              text="Keep Order"
              onClick={() => setOpenCancelModal(false)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
