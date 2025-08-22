"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export const SearchBar = ({ searchTerm, setSearchTerm, className }) => {
  const router = useRouter();

  // Example product list (replace with API data if needed)
  const products = [
    { id: 1, name: "Apple Juice" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Mango" },
    { id: 4, name: "Orange" },
    { id: 5, name: "Pineapple" },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div
      className={`w-full bg-[#f2f3f5] px-6 flex justify-between items-center h-[50px] rounded-3xl relative ${className}`}
    >
      <input
        type="text"
        className="w-[95%] h-full border-none outline-none bg-transparent"
        placeholder="Search Product...!"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Search color="gray" size={18} />

      {searchTerm && filteredProducts.length > 0 && (
        <ul className="absolute top-[60px] left-0 w-full bg-white border border-gray-200 rounded-md shadow-md max-h-60 overflow-y-auto z-50">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                router.push(`/product/${product.id}`);
                setSearchTerm(""); // Clear search after navigation
              }}
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
