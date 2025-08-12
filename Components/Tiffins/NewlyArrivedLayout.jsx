"use client";

import { ItemCard } from "@/Utils/ItemCard";

const categories = [
  "Normal Cakes",
  "Customized Cakes",
  "Birthday Cakes",
  "Wedding Cakes",
  "Cupcakes",
];

const cakeImages = [
  "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1505253210343-9f1a9792ef9b?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1527515637461-0a6f7b8a4925?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1551022371-7de13a102f29?auto=format&fit=crop&w=300&q=80",
];

const products = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  name: `Cake ${i + 1}`,
  price: 250 + i * 10,
  rating: Math.floor(Math.random() * 5) + 1,
  img: cakeImages[i % cakeImages.length],
}));

export default function NewlyArrivedLayout() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Column 1: Categories List */}
        <div className="col-span-1 bg-white p-4 border border-gray-200">
          <h2 className="text-xl font-semibold mb-6">Cake Categories</h2>
          <ul className="flex flex-col gap-3 text-gray-700">
            {categories.map((cat, i) => (
              <li
                key={i}
                className="cursor-pointer px-3 py-2 rounded-md hover:bg-[#edecda] hover:text-gray-900 transition"
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Cake Images */}
        <div className="col-span-1 bg-white p-4 border border-gray-200 flex flex-col">
          <img
            src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-birthday-cake-dessert-pink-three-dimensional-png-image_12164412.png"
            className="w-full "
            alt=""
          />
        </div>

        {/* Columns 3 to 5: Product grids with exactly 2 rows each, no gaps */}
        {[...Array(3)].map((_, colIdx) => (
          <div key={colIdx} className="col-span-1 flex flex-col">
            {products
              .slice(colIdx * 2, colIdx * 2 + 2) // only 2 per column
              .map(({ id, name, price, rating, img }) => (
                <div key={id} className="mb-0 last:mb-0">
                  <ItemCard
                    isAvailableDis={true}
                    rating={rating}
                    img={img}
                    name={name}
                    price={price}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
