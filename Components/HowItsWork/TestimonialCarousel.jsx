"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Cora Lynn",
    role: "Engineer",
    image:
      "https://htmldemo.net/mixy/mixy/assets/images/testimonial/author1.png",
    text: "This website is great. I won’t have to fish through the newspaper trying to find your ad. I didn’t realize you had prescriptions there too!",
  },
  {
    name: "Sarah Sutton",
    role: "Customer",
    image:
      "https://htmldemo.net/mixy/mixy/assets/images/testimonial/author2.png",
    text: "Love the convenience of Mixy and the uber-friendly service. The produce is always fresh and the meat department is first-class.",
  },
  {
    name: "Sandy Wilcke",
    role: "Designer",
    image:
      "https://htmldemo.net/mixy/mixy/assets/images/testimonial/author3.png",
    text: "I find Heeb’s Local Grocery Store to be hugely convenient as I live very close to it and find I will shop there vs. a store further away.",
  },
  {
    name: "John Doe",
    role: "Marketer",
    image:
      "https://htmldemo.net/mixy/mixy/assets/images/testimonial/author1.png",
    text: "The delivery was super quick, everything was fresh and the packaging was neat. Definitely ordering again!",
  },
];

export default function TestimonialCarousel() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === "left" ? -320 : 320, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="w-[20%] bg-red-200 p-1.5 flex justify-between items-center"></div>
      <div className="relative w-[80%]  bg-white">
        <div
          className="flex gap-10 overflow-x-auto scrollbar-hide scroll-smooth "
          ref={containerRef}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[300px] flex flex-col items-center text-center p-6 rounded-lg  bg-white shadow relative transition-transform duration-300 hover:translate-x-5 hover:-translate-y-5"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <h3 className="font-semibold text-gray-900">{t.name}</h3>
              <p className="text-sm text-gray-500 mb-4">/ {t.role}</p>
              <p className="italic text-gray-600 mb-6">“ {t.text} ”</p>
              <span className="text-green-600 text-3xl">❝</span>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-green-500 hover:text-white transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-green-500 hover:text-white transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
