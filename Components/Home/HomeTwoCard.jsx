import { ShopBtn } from "@/Utils/ShopBtn";

export const HomeTwoCard = () => {
  // const cards = [
  //   {
  //     title: "Spicy Chicken Biryani",
  //     description:
  //       "Rich, flavorful Hyderabadi chicken biryani made with secret spices.",
  //     bg: "bg-gradient-to-r from-orange-100 to-orange-200",
  //     img: "/biryani-transparent.png",
  //     width: "w-full md:w-[70%]",
  //   },
  //   {
  //     title: "Sweet Lassi",
  //     description: "Cool, creamy, and refreshing lassi to balance the spice.",
  //     bg: "bg-gradient-to-r from-blue-100 to-blue-200",
  //     img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Lassi_glass.jpg",
  //     width: "w-full md:w-[30%]",
  //   },
  // ];

  const cards = [
    {
      title: "Chocolate Fudge Cake",
      description:
        "Moist and rich chocolate cake layered with creamy fudge frosting.",
      bg: "bg-gradient-to-r from-pink-100 to-pink-200",
      img: "/bg-removes/cake_chocolate_flavor.png",
      width: "w-full md:w-[70%]",
    },
    {
      title: "Crispy Veg Samosa",
      description:
        "Golden fried pastry stuffed with spicy potato and pea filling.",
      bg: "bg-gradient-to-r from-yellow-100 to-yellow-200",
      img: "/bg-removes/samosa.png",
      width: "w-full md:w-[30%]",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row gap-3">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative ${card.width} h-[200px] rounded-md overflow-hidden ${card.bg}`}
        >
          {/* Image */}
          <img
            src={card.img}
            alt={card.title}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[140px] h-auto object-contain opacity-90
             transition-transform duration-300 ease-in-out hover:scale-110"
          />

          {/* Content */}
          <div className="relative h-full z-10 p-5 pr-20 flex flex-col gap-2 justify-center">
            <h2 className="text-xl font-bold text-gray-800">{card.title}</h2>
            <p className="text-sm text-gray-600">{card.description}</p>
            <ShopBtn style="w-[170px]" />
          </div>
        </div>
      ))}
    </div>
  );
};
