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
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const categories = [
  {
    name: "Tiffins",
    sub: [
      { label: "All", icon: Utensils, value: "all" },
      { label: "Idly", icon: Utensils, value: "Idly" },
      { label: "Dosa", icon: Coffee, value: "Dosa" },
      { label: "Aapalu", icon: Apple, value: "Aapalu" },
      { label: "Pasarattu", icon: Apple, value: "Pasarattu" },
    ],
  },
  {
    name: "Biryani",
    sub: [
      { label: "All", icon: Utensils, value: "all" },
      { label: "Veg Biryani", icon: Drumstick, value: "vegetarian" },
      { label: "Non Veg Biryani", icon: Fish, value: "non vegetarian" },
    ],
  },
  {
    name: "Pickle",
    sub: [
      { label: "All", icon: Utensils, value: "all" },
      { label: "Veg Pickles", icon: Apple, value: "veg" },
      { label: "Non Veg Pickles", icon: Apple, value: "non veg" },
    ],
  },
  {
    name: "Cakes",
    sub: [
      { label: "All", icon: Utensils, value: "all" },
      { label: "Normal Cakes", icon: Apple, value: "Normal Cakes" },
      { label: "Cool Cakes", icon: Apple, value: "Cool Cakes" },
      { label: "Cheesecakes", icon: Apple, value: "Cheesecakes" },
    ],
  },
  {
    name: "Meals",
    sub: [
      { label: "All", icon: Utensils, value: "all" },
      { label: "Veg Meals", icon: Apple, value: "Veg Meals" },
      { label: "Non Veg Meals", icon: Apple, value: "Non Veg Meals" },
    ],
  },
];

export const HeaderLast = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  const handleShopClick = (category, subcat) => {
    router.push(
      `/filter-items?category=${encodeURIComponent(
        category
      )}&subcategory=${encodeURIComponent(subcat)}`
    );
  };

  return (
    <header className="w-full bg-[#184d46] text-white">
      <div className="max-w-[1280px] mx-auto flex items-center gap-6 px-4 sm:px-6 md:px-10 py-2 relative">
        {/* Hamburger button for mobile - hidden on md+ */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-[#179958] transition z-50"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Categories Menu - visible on md+ */}
        <div
          className="hidden md:flex items-center gap-10 bg-[#179958] rounded-2xl px-5 py-2 cursor-pointer relative group z-40"
          onMouseLeave={() => setActiveCategory(null)}
        >
          <div className="flex items-center gap-2">
            <Menu color="#fff" />
            <span className="font-semibold text-base text-white">
              Categories
            </span>
          </div>
          <ChevronDown color="#fff" />

          {/* Main Dropdown */}
          <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40">
            {categories?.map((cat) => (
              <div
                key={cat.name}
                className="relative text-black flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onMouseEnter={() => setActiveCategory(cat.name)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {cat.name}
                <ChevronRight size={16} />

                {/* Sub Dropdown aligned to hovered item */}
                {activeCategory === cat.name && (
                  <div className="absolute left-full top-0 w-56 bg-white rounded shadow-lg transition-all duration-300 z-50">
                    {cat.sub?.map(({ label, icon: Icon, value }) => (
                      <div
                        key={label}
                        onClick={() =>
                          handleShopClick(cat.name.toLowerCase(), value)
                        }
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <Icon size={16} className="text-black" />
                        <span className="text-black">{label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Links - visible on md+ */}
        <nav className="hidden md:flex gap-6 font-medium z-40">
          <div className="group relative cursor-pointer">
            Home
            <ChevronDown className="inline ml-1" size={16} />
            <div className="absolute left-0 top-full mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link
                href={{
                  pathname: "/products",
                  query: { category: "biryani" },
                }}
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Biryanis
              </Link>
              <Link
                href={{
                  pathname: "/products",
                  query: { category: "tiffins" },
                }}
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Tiffins
              </Link>
              <Link
                href={{
                  pathname: "/products",
                  query: { category: "pickle" },
                }}
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Pickles
              </Link>
              <Link
                href={{
                  pathname: "/products",
                  query: { category: "snacks" },
                }}
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Snacks
              </Link>
              <Link
                href={{
                  pathname: "/products",
                  query: { category: "cakes" },
                }}
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Bakery
              </Link>
              <Link
                href={{
                  pathname: "/products",
                  query: { category: "meals" },
                }}
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Meals
              </Link>
            </div>
          </div>
          <Link href="/about_us" className="hover:underline cursor-pointer">
            About Us
          </Link>
          <Link href="/contact_us" className="hover:underline cursor-pointer">
            Contact Us
          </Link>
          <Link href="/how-it-works" className="hover:underline cursor-pointer">
            How Its work
          </Link>
        </nav>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#179958] z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } flex flex-col p-5`}
        >
          <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
            <Menu size={24} />
            Categories
          </h2>

          <div className="flex flex-col gap-4 overflow-y-auto">
            {categories.map((cat) => (
              <details key={cat.name} className="group text-white">
                <summary className="cursor-pointer py-2 px-3 rounded-md hover:bg-[#14734c] flex justify-between items-center font-semibold">
                  {cat.name}
                  <ChevronDown
                    className="group-open:rotate-180 transition-transform"
                    size={16}
                  />
                </summary>
                <div className="mt-2 pl-4 flex flex-col gap-2 text-gray-100">
                  {cat.sub.map(({ label, icon: Icon, value }) => (
                    <Link
                      key={label}
                      href={`/filter-items?category=${encodeURIComponent(
                        cat.name.toLowerCase()
                      )}&subcategory=${encodeURIComponent(value)}`}
                      className="flex items-center gap-2 hover:text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      <Icon size={16} />
                      {label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}

            {/* Mobile Home menu with subcategories */}
            <nav className="flex flex-col gap-3 mt-6 font-medium text-white">
              <details className="group">
                <summary className="cursor-pointer py-2 px-3 rounded-md hover:bg-[#14734c] flex justify-between items-center font-semibold">
                  Home
                  <ChevronDown
                    className="group-open:rotate-180 transition-transform"
                    size={16}
                  />
                </summary>
                <div className="mt-2 pl-4 flex flex-col gap-2 text-gray-100">
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: "biryani" },
                    }}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white"
                  >
                    Biryanis
                  </Link>
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: "tiffins" },
                    }}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white"
                  >
                    Tiffins
                  </Link>
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: "pickle" },
                    }}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white"
                  >
                    Pickles
                  </Link>
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: "meals" },
                    }}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white"
                  >
                    Meals
                  </Link>

                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: "cakes" },
                    }}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white"
                  >
                    Bakery
                  </Link>
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: "snacks" },
                    }}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white"
                  >
                    Snacks
                  </Link>
                </div>
              </details>

              <Link
                href="/about_us"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact_us"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
