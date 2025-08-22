"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ShopBtn } from "@/Utils/ShopBtn";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

export default function TiffinsFirstSwipper({ categoryItems, category }) {
  const router = useRouter();

  const fallbackImage = "/placeholder.jpg";

  const { tiffinSlides, rightColumnChunks } = useMemo(() => {
    if (!categoryItems || categoryItems.length === 0) {
      return { tiffinSlides: [], rightColumnChunks: [] };
    }

    // Shuffle and map items
    const shuffled = [...categoryItems].sort(() => Math.random() - 0.5);

    const mapped = shuffled.map((item) => {
      let imgPath = Array.isArray(item.image) ? item.image[0] : item.image;

      if (!imgPath) {
        imgPath = fallbackImage;
      }

      if (!imgPath.startsWith("http") && !imgPath.startsWith("/")) {
        imgPath = "/" + imgPath;
      }

      return {
        img: imgPath,
        title: item.name || "No Title",
        quote: item.description || "No description available",
        price: (item.price || "₹0")?.replace("₹", ""),
      };
    });

    const slides = mapped.slice(0, 3);
    const remainingItems = mapped.slice(3);

    // Group remaining items into chunks of 2
    const chunks = [];
    for (let i = 0; i < remainingItems.length; i += 2) {
      chunks.push(remainingItems.slice(i, i + 2));
    }

    return {
      tiffinSlides: slides,
      rightColumnChunks: chunks,
    };
  }, [categoryItems]);

  const handleShopClick = () => {
    router.push(`/filter-items?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {/* Left: Main Horizontal Swiper */}
      <div className="w-full md:w-3/5 h-[250px] sm:h-[300px] md:h-[450px] rounded-2xl overflow-hidden relative">
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
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10 md:px-18">
                  <h2 className="text-white font-bold text-xl md:text-5xl leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-white/90 text-sm sm:text-lg mt-2 italic">
                    {slide.quote}
                  </p>
                  <span className="text-[#ffcc00] text-lg sm:text-xl font-semibold mt-4">
                    ₹{slide.price} /-
                  </span>
                  <div className="mt-4 sm:mt-6">
                    <ShopBtn onClick={handleShopClick} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right: Vertical Swiper (2 items per slide) */}
      <div className="w-full md:w-2/5 h-[310px] md:h-[450px] rounded-2xl overflow-hidden">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={12}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-right", // Custom container
            type: "bullets",
          }}
          autoplay={{ delay: 3500 }}
          loop={rightColumnChunks.length > 1}
          modules={[Pagination, Autoplay]}
          className="h-full"
        >
          {rightColumnChunks.length > 0 ? (
            rightColumnChunks.map((chunk, slideIdx) => (
              <SwiperSlide key={slideIdx}>
                <div className="grid grid-cols-1 gap-4 h-full">
                  {chunk.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative w-full  rounded-2xl overflow-hidden"
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-4 sm:px-6">
                        <h3 className="text-white font-bold text-lg sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="text-white/90 text-xs sm:text-sm italic mt-1 line-clamp-2">
                          {item.quote}
                        </p>
                        <span className="text-[#ffcc00] text-base font-semibold mt-2">
                          ₹{item.price} /-
                        </span>
                        <div className="mt-2">
                          <ShopBtn onClick={handleShopClick} size="small" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))
          ) : (
            // Fallback if no items
            <SwiperSlide>
              <div className="flex items-center justify-center h-full bg-gray-100">
                <p className="text-gray-500">No items available</p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
        <div className="swiper-pagination-right !absolute !right-2 !w-auto md:!right-4"></div>
      </div>
    </div>
  );
}
