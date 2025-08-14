"use client";
import { useRouter } from "next/navigation";

export const PopularCategories = () => {
  const router = useRouter();
  const categories = [
    {
      sub: [
        {
          name: "Veg Biryani",
          products: 2,
          img: "/bg-removes/veg-biryani.png",
          category: "biryani",
          subcat: "vegetarian",
        },
        {
          name: "Non Biryani",
          products: 16,
          img: "/bg-removes/non-veg-biryani.png",
          category: "biryani",
          subcat: "non_vegetarian",
        },
      ],
    },
    {
      sub: [
        {
          name: "Veg Pickle",
          products: 22,
          img: "/bg-removes/pickles.png",
          category: "pickle",
          subcat: "veg",
        },

        {
          name: "Non Veg Pickle",
          products: 31,
          img: "/bg-removes/pickles.png",
          category: "pickle",
          subcat: "non veg",
        },
      ],
    },
    {
      sub: [
        {
          name: "Tiffins",
          products: 24,
          img: "/bg-removes/tiffin.png",
          category: "pickle",
          subcat: "non veg",
        },
        {
          name: "Meals",
          products: 5,
          img: "/bg-removes/meals.png",
          category: "meals",
          subcat: "non veg",
        },
      ],
    },
    {
      sub: [
        { name: "Snacks", products: 8, img: "/bg-removes/snaks.png" },
        { name: "Cakes", products: 8, img: "/bg-removes/cake.png" },
      ],
    },
  ];

  const handleShopClick = (category, subcat) => {
    router.push(
      `/filter-items?category=${encodeURIComponent(
        category
      )}&subcategory=${encodeURIComponent(subcat)}`
    );
  };

  return (
    <div className="w-full">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-2">Popular Categories</h2>
      <p className="text-gray-600 mb-4">
        Some of our popular categories include
      </p>

      <div className="flex flex-col sm:flex-row border border-gray-200 rounded-lg overflow-hidden h-auto sm:h-[300px]">
        {/* Main Image Column */}
        <div className="sm:w-1/5 w-full flex items-center justify-center border-b sm:border-b-0 sm:border-r border-gray-200">
          <img
            src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"
            alt="Main Category"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Category Columns */}
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="sm:w-1/5 w-full flex flex-col border-t sm:border-t-0 sm:border-l border-gray-200"
          >
            {cat.sub.map((subCat, subIdx) => (
              <div
                onClick={() => handleShopClick(subCat.category, subCat.subcat)}
                key={subIdx}
                className="flex-1 flex items-center justify-between p-4 border-b sm:border-b border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer relative"
              >
                <div>
                  <h4 className="font-semibold">{subCat.name}</h4>
                  <p className="text-sm text-gray-500">
                    {subCat.products} products
                  </p>
                </div>
                <img
                  src={subCat.img}
                  alt={subCat.name}
                  className="w-20 h-20 object-cover absolute right-3 bottom-5"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
