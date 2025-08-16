"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Logo & Social */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/images/logo.webp"
              alt="ShopCart Logo"
              className="w-40 h-10"
            />
            {/* <span className="text-2xl font-bold text-gray-800">shopcart</span> */}
          </div>
          <div className="flex space-x-3">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-sky-500 hover:text-sky-700">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-red-600 hover:text-red-800">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Information Links */}
        <div className="text-center md:text-left">
          <h3 className="text-sm font-bold text-gray-800 mb-3">INFORMATION</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link
                href="/contact_us"
                className="hover:underline cursor-pointer"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/about_us" className="hover:underline cursor-pointer">
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/privacy_policy"
                className="hover:underline cursor-pointer"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/wishlist" className="hover:underline cursor-pointer">
                Wishlist
              </Link>
            </li>
            <li>
              <Link
                href="/checkoutpage"
                className="hover:underline cursor-pointer"
              >
                Checkout
              </Link>
            </li>
          </ul>
        </div>

        {/* My Account Links */}
        <div className="text-center md:text-left">
          <h3 className="text-sm font-bold text-gray-800 mb-3">MY ACCOUNT</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link href="/profile" className="hover:underline cursor-pointer">
                Orders
              </Link>
            </li>
            {/* <li>
              <a href="#">Downloads</a>
            </li> */}
            <li>
              <Link href="/profile" className="hover:underline cursor-pointer">
                Addresses
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:underline cursor-pointer">
                Account details
              </Link>
            </li>
          </ul>
        </div>

        {/* Download App */}
        <div className="text-center md:text-left">
          <h3 className="text-sm font-bold text-gray-800 mb-3">
            DOWNLOAD OUR APP
          </h3>
          <p className="text-gray-600 text-sm mb-3">Fast & Convenient Access</p>
          <div className="flex justify-center md:justify-start gap-2">
            <a href="#">
              <img src="/appstore.png" alt="App Store" className="h-10" />
            </a>
            <a href="#">
              <img src="/googleplay.png" alt="Google Play" className="h-10" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
