import React from "react";

const HowItsWorkLink = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
      {/* 1st block */}
      <div className="flex flex-col gap-3 justify-center items-center relative">
        <img
          src="https://htmldemo.net/mixy/mixy/assets/images/others/img1_banner2_mixy3.webp"
          alt=""
        />
        <span className="text-base text-center text-gray-600">
          Shop groceries and home essentials from your
          <br /> favorite local stores.
        </span>

        {/* line between 1st and 2nd (only desktop) */}
        <img
          src="https://htmldemo.net/mixy/mixy/assets/images/others/line1.png"
          className="hidden md:block absolute right-[-180px] top-14"
          alt=""
        />
      </div>

      {/* 2nd block */}
      <div className="flex flex-col gap-3 justify-center items-center relative">
        <img
          src="https://htmldemo.net/mixy/mixy/assets/images/others/img2_banner2_mixy3.webp"
          alt=""
        />
        <span className="text-base text-center text-gray-600">
          Burpy routes your order to a vetted Personal Shopper <br /> who
          collects your items.
        </span>

        {/* line between 2nd and 3rd (only desktop) */}
        <img
          src="https://htmldemo.net/mixy/mixy/assets/images/others/line2.png"
          className="hidden md:block absolute right-[-150px] top-10"
          alt=""
        />
      </div>

      {/* 3rd block */}
      <div className="flex flex-col gap-3 justify-center items-center">
        <img
          src="https://htmldemo.net/mixy/mixy/assets/images/others/img3_banner2_mixy3.webp"
          alt=""
        />
        <span className="text-base text-center text-gray-600">
          Your order is delivered in as little as 1 hour
        </span>
      </div>
    </div>
  );
};

export default HowItsWorkLink;
