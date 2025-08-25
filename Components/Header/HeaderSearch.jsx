"use client";

import { allProductItems } from "@/public/data/items.data";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const allProducts = useMemo(() => {
    const items = [];

    allProductItems.forEach((categoryObj) => {
      Object.entries(categoryObj).forEach(([categoryKey, subCategories]) => {
        Object.entries(subCategories).forEach(([subCatKey, itemArray]) => {
          if (Array.isArray(itemArray)) {
            itemArray.forEach((product) => {
              items.push({
                ...product,
                _category: categoryKey,
                _subcategory: subCatKey,
              });
            });
          }
        });
      });
    });

    return items;
  }, []);

  const filteredProducts = allProducts.filter((product) =>
    product?.name?.toLowerCase()?.includes(searchTerm.toLowerCase())
  );

  // ||product?.type?.toLowerCase()?.includes(searchTerm.toLowerCase())

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleNavigate = (product) => {
    const query = new URLSearchParams({
      subcategory: product?._subcategory,
      name: product.name,
    }).toString();
    router.push(`/${product?._category}?${query}`);
    setSearchTerm("");
  };

  return (
    <div
      className={`w-full bg-[#f2f3f5] px-6 flex justify-between items-center h-[50px] rounded-3xl relative `}
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
          {filteredProducts.map((product, index) => (
            <li
              key={`${product.name}-${index}`}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full flex items-center gap-2"
              onClick={() => handleNavigate(product)}
            >
              <span className="w-[45px] h-[45px] overflow-hidden bg-gray-50">
                <img
                  src={product?.image?.[0]}
                  className="w-full h-full"
                  alt=""
                />
              </span>
              <div className="flex flex-col">
                <span className="text-base font-semibold">{product.name}</span>
                <span className="text-sm text-gray-700">
                  {product.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// tiffins?subcategory=Aapalu&name=Karam+Aapalu
