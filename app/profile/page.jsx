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
import { AlertTriangle, Menu } from "lucide-react";
import CartLayout from "@/Components/Checkout/CartLayout";

const menuItems = ["Orders", "Addresses", "Account Details"];

export default function page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  const handleMenuClick = (item) => {
    setActive(item);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row p-4">
      <Sidebar
        menuItems={menuItems}
        setActive={handleMenuClick}
        handleLogout={handleLogout}
        active={active}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 lg:p-6 p-4 mt-4 lg:mt-0">
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Menu />
          </button>
        </div>

        <h1 className="text-xl lg:text-2xl font-semibold text-gray-800">
          {active}
        </h1>
        <hr className="my-4" />

        {/* {active === "Dashboard" && (
          <p className="text-gray-600 leading-relaxed max-w-2xl text-sm lg:text-base">
            From your account dashboard, you can easily check & view your recent
            orders, manage your shipping and billing addresses and edit your
            password and account details.
          </p>
        )} */}
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
        {active === "Account Details" && (
          <AccountDetails profile={profile} updateProfile={updateProfile} />
        )}

        <CartLayout />
      </main>

      <Modal onClose={() => setOpenCancelModal(false)} isOpen={openCancelModal}>
        <div className="bg-white rounded-lg w-full p-4 lg:p-6 mx-4 lg:mx-0 max-w-md lg:max-w-none">
          <div className="w-full flex items-center justify-center">
            <div className="p-3 lg:p-4 bg-red-300 flex items-center justify-center rounded-full">
              <AlertTriangle size={24} className="lg:w-7 lg:h-7" />
            </div>
          </div>
          <h2 className="text-lg lg:text-xl font-semibold text-gray-800 text-center mt-4">
            Cancel Order
          </h2>
          <p className="mt-3 text-gray-600 text-sm lg:text-base text-center lg:text-left">
            Are you sure you want to cancel order{" "}
            <strong>#{selectedOrder?._id}</strong>? This action cannot be
            undone.
          </p>

          <div className="mt-6 flex flex-col-reverse lg:flex-row justify-end gap-3">
            <CustomButton
              className=""
              text="Keep Order"
              onClick={() => setOpenCancelModal(false)}
            />
            <CustomButton
              className="bg-red-500 hover:bg-red-600"
              text="Cancel Order"
              onClick={cancelOrder}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
