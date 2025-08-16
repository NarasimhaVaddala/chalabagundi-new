import React from "react";
import { FaHeart, FaGlobe, FaAward, FaRocket } from "react-icons/fa";

const Page = () => {
  const stats = [
    {
      icon: <FaHeart className="text-5xl  mb-4 " />,
      value: 159,
      label: "Satisfied Clients",
    },
    {
      icon: <FaGlobe className="text-5xl mb-4" />,
      value: 68,
      label: "Projects a Year",
    },
    {
      icon: <FaAward className="text-5xl mb-4" />,
      value: 88,
      label: "Awards Won",
    },
    {
      icon: <FaRocket className="text-5xl mb-4" />,
      value: 668,
      label: "Support Tickets",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="bg-[#f8fbf3] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 relative overflow-hidden">
        <div className="mb-6 md:mb-0">
          <h1 className="text-4xl font-bold mb-2">About Us</h1>
          <p className="text-gray-600">
            Home <span className="mx-2">&gt;</span> About Us
          </p>
        </div>
        <div className="hidden md:block w-56 h-56">
          <img
            src="https://content3.jdmagicbox.com/v2/comp/mumbai/r5/040pxx40.xx40.180630225100.v2r5/catalogue/my-tiffins-kanajiguda-hyderabad-breakfast-restaurants-ve06sxaer6.jpg"
            alt="About Us"
            className="w-full h-full object-contain rounded"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 px-[clamp(1rem,6vw,5rem)] py-2 mt-14">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Chala Bagundi <span className="text-green-600">for Taste</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Great theme, excellent support. We had a few small issues with
            getting the dropdown menus to work and support fixed them and let us
            know which files were changed so that we could replicate from dev to
            production.
          </p>
          <div className="flex justify-center">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/d9d752c0f8cee46c4f1a52befe4923be"
              alt="Grocery Store"
              className="w-full h-[400px] md:h-[820px] rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Who We Are ?</h2>
            <p className="text-gray-600 max-w-5xl">
              After every trip to Hawaii, I always have a few DMs asking where
              we stayed, our favorite beaches, etc. Especially with spring break
              around the corner, I wanted to share a recap of our trip a couple
              weeks ago. I've shared a few recaps of where we've stayed and our
              favorite activities when we went as a family – this trip was more
              of an adult trip but I have multiple posts with guides on past
              Hawaii trips: a Maui Travel
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <h2 className="text-2xl font-bold">Our Values</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lobortis faucibus scelerisque fermentum dui faucibus in. Id diam
              vel quam elementum pulvinar etiam non. Integer eget aliquet nibh
              praesent tristique pulvinar etiam. In nibh mauris cursus mattis
              molestie a iaculis leo.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-gray-600">
              Non diam phasellus vestibulum lorem sed risus ultricies tristique
              nulla. Lacus luctus accumsan tortor posuere. Tellus in metus
              vulputate eu scelerisque felis imperdiet proin. Nec tincidunt
              praesent semper feugiat. Quis imperdiet massa tincidunt nunc
              pulvinar sapien et ligula. In nibh mauris cursus mattis molestie a
              iaculis. Id diam vel quam elementum non.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#13544e] text-white  grid grid-cols-2 md:grid-cols-4 gap-8  items-center p-5">
          {stats.map((stat, index) => (
            <div key={index}>
              {stat.icon}
              <p className="text-3xl  font-bold">{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Meet Our Team */}
        <div className="">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Marcosinacioluz",
                role: "Designer",
                img: "https://htmldemo.net/mixy/mixy/assets/images/teams/leader1-about2-1.jpg",
              },
              {
                name: "Wingcitymedia",
                role: "Photographer",
                img: "https://htmldemo.net/mixy/mixy/assets/images/teams/leader2-about2-1.jpg",
              },
              {
                name: "Tee3sports",
                role: "Designer",
                img: "https://htmldemo.net/mixy/mixy/assets/images/teams/leader3-about2-1.jpg",
              },
              {
                name: "Aussiemines",
                role: "C.E.O",
                img: "https://htmldemo.net/mixy/mixy/assets/images/teams/leader4-about2-1.jpg",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                {/* Image */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-auto object-cover"
                />
                {/* Name + Role Overlay */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 text-center rounded shadow">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
