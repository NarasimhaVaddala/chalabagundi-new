import CartLayout from "@/Components/Checkout/CartLayout";
import React from "react";

const PrivacyPage = () => {
  return (
    <div>
      {/* Privacy Policy Header */}
      <div className="bg-[#f8fbf3] flex items-center justify-between px-8 md:px-16 py-10 relative overflow-hidden">
        <div>
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-600">
            Home <span className="mx-2">&gt;</span> Privacy Policy
          </p>
        </div>

        <div className="hidden md:block w-56 h-56 rounded bg-[url('https://content3.jdmagicbox.com/v2/comp/mumbai/r5/040pxx40.xx40.180630225100.v2r5/catalogue/my-tiffins-kanajiguda-hyderabad-breakfast-restaurants-ve06sxaer6.jpg')] bg-contain bg-no-repeat bg-right"></div>
      </div>

      {/* Privacy Policy Content */}
      <div className="px-8 md:px-16 py-10  text-gray-800 space-y-6">
        <h2 className="text-2xl font-bold">Who we are</h2>
        <p>Our website address is: http://127.0.0.1/wp56/wp_core.</p>

        <h2 className="text-2xl font-bold">
          What personal data we collect and why we collect it
        </h2>

        <h3 className="text-xl font-semibold">Comments</h3>
        <p>
          When visitors leave comments on the site we collect the data shown in
          the comments form, and also the visitor’s IP address and browser user
          agent string to help spam detection.
        </p>
        <p>
          An anonymized string created from your email address (also called a
          hash) may be provided to the Gravatar service to see if you are using
          it. The Gravatar service privacy policy is available here:
          <a
            href="https://automattic.com/privacy/"
            className="text-blue-600 underline"
          >
            {" "}
            https://automattic.com/privacy/
          </a>
          . After approval of your comment, your profile picture is visible to
          the public in the context of your comment.
        </p>

        <h3 className="text-xl font-semibold">Media</h3>
        <p>
          If you upload images to the website, you should avoid uploading images
          with embedded location data (EXIF GPS) included. Visitors to the
          website can download and extract any location data from images on the
          website.
        </p>

        <h3 className="text-xl font-semibold">Contact forms</h3>
        <p>
          We may collect your name, email, and message details for the purpose
          of responding to your inquiries.
        </p>

        <h3 className="text-xl font-semibold">Cookies</h3>
        <p>
          If you leave a comment on our site you may opt-in to saving your name,
          email address and website in cookies. These are for your convenience
          so that you do not have to fill in your details again when you leave
          another comment. These cookies will last for one year.
        </p>
        <p>
          If you visit our login page, we will set a temporary cookie to
          determine if your browser accepts cookies. This cookie contains no
          personal data and is discarded when you close your browser.
        </p>
      </div>

      <CartLayout />
    </div>
  );
};

export default PrivacyPage;
