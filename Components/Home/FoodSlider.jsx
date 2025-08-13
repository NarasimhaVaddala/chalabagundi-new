"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { ShopBtn } from "@/Utils/ShopBtn";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";

export default function FoodSlider() {
  const router = useRouter();
  const slides = [
    {
      title: "Delicious Tiffins",
      quote: "Start your day the tasty way!",
      price: 150,
      img: "https://t4.ftcdn.net/jpg/01/43/08/01/360_F_143080110_bhy9PAHvK2A5K2HrlJqEnhHlJOXEZ8k0.jpg",
      category: "tiffins",
    },
    {
      title: "Authentic Biryani",
      quote: "A royal treat for your taste buds.",
      price: 250,
      img: "https://t3.ftcdn.net/jpg/13/63/66/86/360_F_1363668605_cflY80dDX4Zwn9muOqfnZ219f5sLTOOD.jpg",
      category: "biryani",
    },
    {
      title: "Homemade Pickles",
      quote: "The flavor of home in every bite.",
      price: 120,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PB5nXJUMhZqfJOirqGEtgC7syCBNMgxX2ywH12BGzUGEnFNQL098upxPFqMy91UqaWE&usqp=CAU",
      category: "pickle",
    },
  ];

  const handleShopClick = (category) => {
    router.push(`/filter-items?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-[300px] md:h-[500px] custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center pl-8 md:pl-20">
                <h2 className="text-white font-bold text-3xl md:text-6xl leading-tight">
                  {slide.title}
                </h2>
                <p className="text-white/90 text-lg md:text-xl mt-2 italic">
                  {slide.quote}
                </p>
                <span className="text-[#ffcc00] text-xl md:text-2xl font-semibold mt-4">
                  ₹{slide.price} /-
                </span>
                <div className="mt-6">
                  <ShopBtn onClick={() => handleShopClick(slide.category)} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS for small round navigation buttons */}
      <style jsx global>{`
        .custom-swiper .swiper-button-next,
        .custom-swiper .swiper-button-prev {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
        }

        .custom-swiper .swiper-button-next::after,
        .custom-swiper .swiper-button-prev::after {
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
