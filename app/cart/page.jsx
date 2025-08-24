"use client";
import AddressForm from "@/Components/Cart/AddressForm";
import LoginSignupBox from "@/Components/Auth/LoginSignUpBox";
import CardItem from "@/Components/card/CardItem";
import AdressBox from "@/Components/Cart/AdressBox";
import PriceDetailsBox from "@/Components/Cart/PriceDetailsBox";
import { useAddressHook } from "@/Hooks/cart/AddressHook";
import { useCartHook } from "@/Hooks/cart/Cart.Hook";
import React from "react";
import AddressListBox from "@/Components/Cart/AddressListBox";
import EmptyComponent from "@/Components/wishlist/EmptyComponent";

export default function CartPage() {
  const {
    selectedAddress,
    addressOpen,
    setAddressOpen,
    handleSubmit,
    validation,
    addressBoxOpen,
    setAddressBoxOpen,
    profile,
    setSelectedAddress,
  } = useAddressHook();

  const {
    cartItems,
    FormWrapper,
    errors,
    handleCheckOut,
    open,
    otpSent,
    register,
    setOpen,
    signUp,
    totalPrice,
    paymentMethod,
    setPaymentMethod,
  } = useCartHook({ selectedAddress, setAddressOpen, setAddressBoxOpen });

  if (!cartItems.length) {
    return <EmptyComponent text="Cart" />;
  }

  return (
    <div className="flex flex-col lg:flex-row w-full gap-6 p-4">
      <div className="w-full flex flex-col gap-4 lg:w-3/5 order-2 lg:order-1">
        {addressOpen ? (
          <>
            <AddressForm
              setAddressOpen={() => setAddressOpen(!addressOpen)}
              submitFn={handleSubmit}
              validation={validation}
            />
          </>
        ) : (
          <>
            {profile && (
              <AdressBox
                selectedAddress={selectedAddress}
                setAddressOpen={setAddressOpen}
                addressOpen={addressOpen}
                addressBoxOpen={addressBoxOpen}
                setAddressBoxOpen={setAddressBoxOpen}
              />
            )}

            {cartItems?.map((item, index) => (
              <CardItem key={index} item={item} />
            ))}
          </>
        )}
      </div>

      <div className="w-full lg:w-2/5 order-1 lg:order-2">
        <PriceDetailsBox
          price={totalPrice}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          checkout={handleCheckOut}
        />
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

      {addressBoxOpen && (
        <AddressListBox
          selectedAddress={selectedAddress}
          setAddressBoxOpen={setAddressBoxOpen}
          addressList={profile?.address}
          setSelectedAddress={setSelectedAddress}
          openAddressForm={() => setAddressOpen(!addressOpen)}
        />
      )}
    </div>
  );
}
