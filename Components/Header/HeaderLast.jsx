"use client";
import { useState } from "react";
import {
  Utensils,
  Coffee,
  Drumstick,
  Fish,
  Apple,
  Menu,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export const HeaderLast = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      name: "Tiffins",
      sub: [
        { label: "Sambar Idly", icon: Utensils },
        { label: "Dosa", icon: Coffee },
        { label: "Poori", icon: Apple },
      ],
    },
    {
      name: "Biryanis",
      sub: [
        { label: "Chicken Biryani", icon: Drumstick },
        { label: "Mutton Biryani", icon: Fish },
        { label: "Veg Biryani", icon: Apple },
      ],
    },
    {
      name: "Pickles",
      sub: [
        { label: "Mango Pickle", icon: Apple },
        { label: "Lemon Pickle", icon: Apple },
        { label: "Gongura Pickle", icon: Apple },
      ],
    },
  ];

  return (
    <div className="w-full flex items-center gap-6 bg-[#184d46] px-[clamp(1rem,6vw,5rem)] py-2 relative">
      {/* Categories Menu */}
      <div className="group relative bg-[#179958] rounded-2xl flex items-center gap-10 px-5 py-2 cursor-pointer">
        <div className="flex items-center gap-2">
          <Menu color="#fff" />
          <span className="text-white font-semibold text-base">Categories</span>
        </div>
        <ChevronDown color="#fff" />

        {/* Dropdown */}
        <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onMouseEnter={() => setActiveCategory(cat.name)}
            >
              {cat.name}
              <ChevronRight size={16} />
            </div>
          ))}
        </div>

        {/* Subcategory Panel */}
        {activeCategory && (
          <div
            className="absolute left-[14rem] top-full mt-2 w-56 bg-white rounded shadow-lg transition-all duration-300"
            onMouseLeave={() => setActiveCategory(null)}
          >
            {categories
              .find((c) => c.name === activeCategory)
              ?.sub.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <Icon size={16} className="text-gray-500" />
                  <span>{label}</span>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6 text-white font-medium">
        <div className="group relative cursor-pointer">
          Home
          <ChevronDown className="inline ml-1" size={16} />
          <div className="absolute left-0 top-full mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <Link
              href="/biryani"
              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Biryanies
            </Link>
            <Link
              href="/tiffins"
              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Tiffins
            </Link>
            <Link
              href="/pickles"
              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Pickles
            </Link>
          </div>
        </div>
        <div className="cursor-pointer hover:underline">Products</div>
        <div className="cursor-pointer hover:underline">Blogs</div>
      </nav>
    </div>
  );
};
