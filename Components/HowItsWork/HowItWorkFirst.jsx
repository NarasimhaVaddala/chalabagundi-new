import React from "react";
import HowItsWorkLink from "./HowItsWorkLink";
import TestimonialCarousel from "./TestimonialCarousel";

const HowItWorkFirst = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="w-full  md:w-[45%] ">
          <img
            src="https://htmldemo.net/mixy/mixy/assets/images/banners/img_banner1_mixy3.webp"
            alt=""
            className="w-[86%]"
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col gap-5 justify-center items-center">
          <h2 className="text-base font-semibold text-[#4b9b57]">
            How It Works
          </h2>
          <h1 className="text-4xl font-semibold text-[#184d47] mb-6">
            Highest Quality
          </h1>
          <div className="w-full flex flex-col gap-2">
            <span className="text-base font-semibold text-black">
              Due to the COVID-19 pandemic
            </span>
            <span className="text-base font-semibold text-black">
              We are currently experiencing higher than usual order volume.
            </span>
            <span className="text-sm font-semibold text-black">
              To further expedite our process, we have decided to put in place
              the following measures:
            </span>
            <ul className="list-disc pl-9">
              <li className="text-sm text-gray-700">
                You will no longer be notified by phone when an ordered item is
                out of stock
              </li>
              <li className="text-sm text-gray-700">
                Your invoice will still show the out of stock item, however, you
                will not be billed for it (i.e. it will show up as having “0”
                quantity).
              </li>
            </ul>

            <span className="text-sm text-gray-700 mt-2">
              Please be assured that we are doing our best to fulfill all
              orders, however, do understand the circumstances may cause a delay
              in getting you your groceries.
            </span>
            <span className="text-sm text-gray-700 mt-3">
              Stay safe and we thank you for your trust and understanding.
            </span>
          </div>
        </div>
      </div>
      {/* link */}
      <HowItsWorkLink />
      {/* <TestimonialCarousel /> */}
    </div>
  );
};

export default HowItWorkFirst;
