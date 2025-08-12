import { Globe, IndianRupee, Phone } from "lucide-react";
export const HeaderTop = () => {
  return (
    <div className="w-full bg-white flex justify-between items-center border-b px-[clamp(1rem,6vw,5rem)] py-2 border-gray-200">
      <span className="flex items-center gap-2 animate-pulse text-sm text-gray-600">
        Welcome to Chala Bagundi
      </span>

      <div className="hidden sm:flex items-center gap-6">
        <span className="flex items-center text-sm text-gray-500 gap-1 hover:text-green-200 transition">
          <Phone className="h-4 w-4" /> Need help? Call Us{" "}
          <span className="text-[#179958] font-semibold">+91 88 55 4468</span>
        </span>
        <span className="flex items-center gap-1 cursor-pointer hover:underline text-sm text-gray-500">
          <Globe className="h-4 w-4" /> English
        </span>
        <span className="flex items-center gap-1 cursor-pointer hover:underline text-sm text-gray-500">
          <IndianRupee className="h-4 w-4" /> Inr
        </span>
      </div>
    </div>
  );
};
