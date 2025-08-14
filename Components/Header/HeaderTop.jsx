import { Globe, Phone } from "lucide-react";

export const HeaderTop = () => {
  return (
    <div className="w-full bg-white flex justify-between items-center border-b px-[clamp(1rem,6vw,5rem)] py-2 border-gray-200">
      <span className="flex items-center gap-2 animate-pulse text-sm text-gray-600">
        Welcome to Chala Bagundi
      </span>

      <div className="hidden sm:flex items-center gap-6">
        <a
          href="https://wa.me/919014548747"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-gray-500 gap-1 hover:text-green-200 transition"
        >
          <Phone className="h-4 w-4" /> Need help? Chat on WhatsApp{" "}
          <span className="text-[#179958] font-semibold">+91 9014548747</span>
        </a>

        <span className="flex items-center gap-1 cursor-pointer hover:underline text-sm text-gray-500">
          <Globe className="h-4 w-4" /> English
        </span>
      </div>
    </div>
  );
};
