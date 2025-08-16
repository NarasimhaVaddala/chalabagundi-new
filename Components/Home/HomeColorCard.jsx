"use client";

import { useRouter } from "next/navigation";
import { ShopBtn } from "@/Utils/ShopBtn";

export const HomeColorCard = () => {
  const router = useRouter();

  const cards = [
    {
      title: "Biryani",
      description:
        "Delicious and aromatic Hyderabadi biryani, made fresh daily.",
      bg: "bg-gradient-to-r from-yellow-100 to-yellow-200",
      img: "/biryani-transparent.png",
      category: "biryani",
    },
    {
      title: "Pickle",
      description: "Authentic Indian pickles with the taste of tradition.",
      bg: "bg-gradient-to-r from-green-100 to-green-200",
      img: "/homes/home-pickel.jpg",
      category: "pickle",
    },
    {
      title: "Tiffins",
      description: "Hot and fresh South Indian breakfasts every morning.",
      bg: "bg-gradient-to-r from-pink-100 to-pink-200",
      img: "https://thumbs.dreamstime.com/b/samosa-tiffins-white-background-isolated-highly-realistic-detailed-design-blurred-extruded-elements-photo-284108881.jpg",
      category: "tiffins",
    },
  ];

  const handleShopClick = (category) => {
    router.push(`/filter-items?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="w-full flex flex-wrap gap-3 justify-between items-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative w-[350px] h-[200px] rounded-md overflow-hidden ${card.bg}`}
        >
          <img
            src={card.img}
            alt={card.title}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[140px] h-auto object-contain opacity-90
             transition-transform duration-300 ease-in-out hover:scale-110"
          />

          <div className="relative h-full z-10 p-5 max-w-[70%] flex flex-col gap-2 justify-center">
            <h2 className="text-xl font-bold text-gray-800">{card.title}</h2>
            <p className="text-sm text-gray-600">{card.description}</p>

            {/* Pass category when clicking */}
            <ShopBtn
              style="w-[170px]"
              onClick={() => handleShopClick(card.category)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
