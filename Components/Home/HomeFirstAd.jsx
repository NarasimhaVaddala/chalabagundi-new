import Image from "next/image";

export const HomeFirstAd = () => {
  return (
    <div className="w-full flex justify-between items-center flex-wrap gap-6">
      {/* Biryani Card */}
      <div className=" w-full md:w-[47%] relative">
        <img
          className="w-full rounded-lg h-[250px]"
          src="https://t4.ftcdn.net/jpg/01/43/08/01/360_F_143080110_bhy9PAHvK2A5K2HrlJqEnhHlJOXEZ8k0.jpg"
          alt="Delicious Biryani"
        />
        <div className="flex flex-col justify-center gap-2 absolute top-0 left-7 h-full">
          <div className="flex flex-col gap-4 bg-white/10 p-4 rounded-md backdrop-blur-sm">
            <h2 className="text-lg font-bold text-black">
              Spicy & Flavorful <br /> Hyderabadi Biryani
            </h2>
            <span className="text-xl font-semibold text-[#da2e1f]">
              Starting at ₹199
            </span>
          </div>
        </div>
      </div>

      {/* Pickles Card */}
      <div className="w-full  md:w-[47%] relative">
        <img
          className="w-full rounded-lg h-[250px]"
          src="https://t4.ftcdn.net/jpg/05/55/06/43/360_F_555064359_tZcX3dC7DZtD5tvW8mWKnSkpI6LusKxZ.jpg"
          alt="Homemade Pickles"
        />
        <div className="flex flex-col justify-center gap-2 absolute top-0 left-7 h-full">
          <div className=" flex flex-col gap-4 bg-white/20 p-4 rounded-md backdrop-blur-sm">
            <h2 className="text-lg font-bold text-black">
              Tangy & Tasty <br /> Homemade Pickles
            </h2>
            <span className="text-xl font-semibold text-[#da2e1f]">
              Flat 15% OFF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
