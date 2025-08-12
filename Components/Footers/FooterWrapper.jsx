import React from "react";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";
import FeaturesBar from "./FeaturesBar";
import NewsletterBar from "./NewsletterBar";

export const FooterWrapper = () => {
  return (
    <div className="w-full flex flex-col mt-10">
      <NewsletterBar />
      <FeaturesBar />
      <Footer />
      <FooterBottom />
    </div>
  );
};
