"use client";
import React from "react";
import ContactHero from "@/Components/contact/ContactHero";
import ContactsForm from "@/Components/contact/ContactsForm";
import CartLayout from "@/Components/Checkout/CartLayout";

export default function page() {
  return (
    <div>
      <ContactHero />
      <ContactsForm />

      <CartLayout />
    </div>
  );
}
