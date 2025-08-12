import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function NewsletterBar() {
  return (
    <div className="bg-[#174E4B] text-white px-6 py-8 md:px-12 md:py-6 flex flex-col md:flex-row items-center justify-center gap-9">
      {/* Left Section - Mail Icon & Text */}
      <div className="flex items-center gap-4 min-w-[260px]">
        <div className="bg-[#0E3C38] p-3 rounded-full">
          <HiOutlineMail className="text-2xl" />
        </div>
        <div>
          <h3 className="font-semibold text-lg leading-tight">
            Sign up to Newsletter
          </h3>
          <p className="text-sm text-gray-200">
            ...and receive $20 coupon for first shopping
          </p>
        </div>
      </div>

      {/* Middle Section - Email Input */}
      <div className="flex w-full md:w-[40%] h-12 rounded-full overflow-hidden border border-gray-300 bg-white p-1.5">
        <input
          type="email"
          placeholder="Your Email Address..."
          className="flex-1 px-4 text-gray-700 outline-none text-sm"
        />
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 text-sm font-medium rounded-2xl">
          Subscribe!
        </button>
      </div>

      {/* Right Section - WhatsApp Button */}
      <div className="flex items-center gap-3 bg-[#0E3C38] px-5 py-2.5 rounded-full cursor-pointer hover:bg-[#0b302d] transition">
        <div className="bg-green-500 p-2 rounded-full">
          <FaWhatsapp className="text-xl text-white" />
        </div>
        <div>
          <p className="text-[11px] text-gray-300 leading-tight">
            Call Us 24/7
          </p>
          <p className="text-sm font-semibold">+8 88 55 4168</p>
        </div>
      </div>
    </div>
  );
}
