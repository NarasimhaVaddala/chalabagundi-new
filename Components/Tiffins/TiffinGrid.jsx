"use client";

import Image from "next/image";

const data = [
  {
    title: "Idli with Sambar",
    img: "https://t4.ftcdn.net/jpg/01/43/49/27/360_F_143492736_QgCfB0XKHtZpfGlIb1hr3M6mGCepcDVs.jpg",
  },
  {
    title: "Masala Dosa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxO51dhQgU4E69eIY40mfQDMowr6EyffU0Q&s",
  },
  {
    title: "Pesarattu Upma",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0X3JfY0GV02aJBCJjKCWllzSr0bS-GuJ2Fw&s",
  },
  {
    title: "Upma with Chutney",
    img: "https://media.istockphoto.com/id/1488737992/photo/upma-recipe-suji-ka-upma-rava-upma-with-red-and-coconut-chutney.jpg?s=612x612&w=0&k=20&c=dGTIRLT4c7XdC8xAqkumyuURqMAy3HNQccNjEQT3wmU=",
  },
  {
    title: "Poha",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdu0r5m-rVgdqn7zzbvdYsOSzm-7zCDVAaLQ&s",
  },
  {
    title: "Vada",
    img: "https://cdn.pixabay.com/photo/2017/05/07/08/56/vada-2294366_960_720.jpg",
  },
  {
    title: "Upma",
    img: "https://cdn.pixabay.com/photo/2017/08/06/23/11/upma-2598580_960_720.jpg",
  },
  {
    title: "Sambar",
    img: "https://cdn.pixabay.com/photo/2016/02/21/18/33/sambar-1213412_960_720.jpg",
  },
  {
    title: "Curd Rice",
    img: "https://cdn.pixabay.com/photo/2019/07/28/13/46/curd-rice-4364116_960_720.jpg",
  },
  {
    title: "Lemon Rice",
    img: "https://cdn.pixabay.com/photo/2017/06/20/10/01/lemon-rice-2425486_960_720.jpg",
  },
];

export default function TiffinGrid() {
  return (
    <div className="w-full">
      <div className="flex flex-wrap w-full">
        {data.slice(0, 8).map(({ title, img }, idx) => (
          <div
            key={idx}
            className="w-1/4 h-[140px] flex items-center justify-between p-4 border border-gray-300 bg-white hover:border-gray-700 transition-colors cursor-pointer"
          >
            <h3 className="text-base font-semibold text-gray-800">{title}</h3>

            <div className="w-[100px] h-[100px] rounded-full bg-[#f2e7e6]  flex items-center justify-center overflow-hidden">
              {/* <img
                src={img}
                alt={title}
                className="rounded-full object-cover w-[80%] h-[80%]"
                draggable={false}
              /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
