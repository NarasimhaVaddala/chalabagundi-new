"use client";

export default function FooterBottom() {
  return (
    <div className="border-t border-gray-200 bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Copyright Text */}
        <p className="text-sm text-gray-600 text-center md:text-left">
          Copyright © WebMasterPro. All Rights Reserved.
        </p>

        {/* Payment Methods */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <img src="/discover.png" alt="Discover" className="h-6" />
          <img src="/mastercard.png" alt="Mastercard" className="h-6" />
          <img src="/paypal.png" alt="PayPal" className="h-6" />
          <img src="/skrill.png" alt="Skrill" className="h-6" />
          <img src="/visa.png" alt="Visa" className="h-6" />
        </div>
      </div>
    </div>
  );
}
