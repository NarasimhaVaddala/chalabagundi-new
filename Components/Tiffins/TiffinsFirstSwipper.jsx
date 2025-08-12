"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ShopBtn } from "@/Utils/ShopBtn";

const tiffinSlides = [
  {
    img: "https://t4.ftcdn.net/jpg/01/43/49/27/360_F_143492736_QgCfB0XKHtZpfGlIb1hr3M6mGCepcDVs.jpg",
    title: "Idli with Sambar",
    quote: "Soft & fluffy idlis served with hot sambar",
    price: 50,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxO51dhQgU4E69eIY40mfQDMowr6EyffU0Q&s",
    title: "Masala Dosa",
    quote: "Crispy dosa with spicy potato filling",
    price: 70,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0X3JfY0GV02aJBCJjKCWllzSr0bS-GuJ2Fw&s",
    title: "Pesarattu Upma",
    quote: "Healthy green gram dosa with upma",
    price: 80,
  },
];

const rightColumnItems = [
  {
    img: "https://media.istockphoto.com/id/1488737992/photo/upma-recipe-suji-ka-upma-rava-upma-with-red-and-coconut-chutney.jpg?s=612x612&w=0&k=20&c=dGTIRLT4c7XdC8xAqkumyuURqMAy3HNQccNjEQT3wmU=",
    title: "Upma with Chutney",
    quote: "Hot upma with coconut chutney",
    price: 45,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdu0r5m-rVgdqn7zzbvdYsOSzm-7zCDVAaLQ&s",
    title: "Poha",
    quote: "Light & healthy morning snack",
    price: 40,
  },
];

export default function TiffinsFirstSwipper() {
  return (
    <div className="flex flex-col md:flex-row gap-4  w-full">
      {/* Left Column - Swiper */}
      <div className="w-full md:w-3/5 h-[250px] sm:h-[300px] md:h-[500px] rounded-2xl overflow-hidden relative">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Pagination, Autoplay]}
          className="h-full"
        >
          {tiffinSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-20 sm:px-16">
                  <h2 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-white/90 text-sm sm:text-lg mt-2 italic">
                    {slide.quote}
                  </p>
                  <span className="text-[#ffcc00] text-lg sm:text-xl font-semibold mt-4">
                    ₹{slide.price} /-
                  </span>
                  <div className="mt-4 sm:mt-6">
                    <ShopBtn />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons Spacing Fix */}
        <style jsx global>{`
          /* Buttons styling */
          .swiper-button-next,
          .swiper-button-prev {
            width: 40px;
            height: 40px;
            background: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: black;
            top: 50% !important;
            transform: translateY(-50%);
          }

          /* Font size for arrows */
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 16px;
            font-weight: bold;
          }

          /* Left button position with margin */
          .swiper-button-prev {
            left: 12px !important; /* move right a bit */
          }

          /* Right button position with margin */
          .swiper-button-next {
            right: 12px !important; /* move left a bit */
          }

          /* Pagination bullets bottom spacing */
          .swiper-pagination {
            bottom: 12px !important;
          }
        `}</style>
      </div>

      {/* Right Column - 2 stacked rows */}
      <div className="w-full md:w-2/5 flex flex-col gap-4">
        {rightColumnItems.map((item, idx) => (
          <div
            key={idx}
            className="relative w-full h-[150px] sm:h-[180px] md:h-1/2 rounded-2xl overflow-hidden"
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-4 sm:px-6">
              <h3 className="text-white font-bold text-lg sm:text-2xl md:text-3xl">
                {item.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-base italic mt-1">
                {item.quote}
              </p>
              <span className="text-[#ffcc00] text-base sm:text-lg font-semibold mt-2">
                ₹{item.price} /-
              </span>
              <div className="mt-2 sm:mt-4">
                <ShopBtn />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
