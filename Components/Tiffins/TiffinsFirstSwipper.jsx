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

  const { tiffinSlides, rightColumnItems } = useMemo(() => {
    if (!categoryItems || categoryItems.length === 0) {
      return { tiffinSlides: [], rightColumnItems: [] };
    }

    // Shuffle array
    const shuffled = [...categoryItems].sort(() => Math.random() - 0.5);

    // Map to valid structure with image fallback
    const mapped = shuffled.map((item) => {
      let imgPath = Array.isArray(item.image) ? item.image[0] : item.image;

      if (!imgPath) {
        imgPath = fallbackImage;
      }

      // If not full URL and not starting with "/", assume it's in public folder
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

    return {
      tiffinSlides: mapped?.slice(0, 3),
      rightColumnItems: mapped?.slice(3, 5),
    };
  }, [categoryItems]);

  const handleShopClick = () => {
    router.push(`/filter-items?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
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
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10 md:px-18">
                  <h2 className="text-white font-bold text-xl  md:text-5xl leading-tight">
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
                <ShopBtn onClick={handleShopClick} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
