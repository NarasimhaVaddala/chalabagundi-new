"use client";
import LoginSignupBox from "@/Components/Auth/LoginSignUpBox";
import CardItem from "@/Components/card/CardItem";
import AuthModal from "@/Components/card/Modal/AuthModal";
import EmptyComponent from "@/Components/wishlist/EmptyComponent";
import { useCartHook } from "@/Hooks/cart/Cart.Hook";
import Modal from "@/Utils/Modal";
import React from "react";

const Page = () => {
  const {
    FormWrapper,
    handleCheckOut,
    errors,
    register,
    open,
    setOpen,
    otpSent,
    signUp,
    cartItems,
    totalPrice,
  } = useCartHook();

  return (
    <>
      <div className="w-full flex flex-col gap-10 px-[clamp(1rem,6vw,5rem)] py-2 mt-7">
        {cartItems.length === 0 ? (
          <EmptyComponent text="Cart" />
        ) : (
          <>
            {cartItems.map((item) => (
              <CardItem key={item.name} item={item} />
            ))}

            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-y border-gray-200 py-3">
              <div className="flex justify-between items-center w-full md:w-auto">
                <span className="text-base md:text-lg">Total Price</span>
                <span className="text-2xl font-semibold text-[#184d47] ml-4">
                  ₹ {totalPrice} /-
                </span>
              </div>

              <button
                onClick={handleCheckOut}
                className="cursor-pointer w-full md:w-[150px] h-[45px] text-white text-lg font-semibold bg-[#184d47] rounded-md"
              >
                Check Out
              </button>
            </div>
          </>
        )}
      </div>
      {open && (
        <LoginSignupBox
          FormWrapper={FormWrapper}
          errors={errors}
          register={register}
          closeFn={() => setOpen(!open)}
          otpSent={otpSent}
          signUp={signUp}
        />
      )}
    </>
  );
};

export default Page;
