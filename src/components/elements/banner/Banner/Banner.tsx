import React from "react";
import image from "../../../../utils/constants/image.constant";

const Banner = () => {
  return (
    <div className="relative w-full h-full pb-10">
      <div className="container relative items-center gap-8 px-4 mx-auto xl:px-0 md:flex">
        <div className="w-full pt-16 pl-20 text-color md:w-1/3 lg:pt-32 xl:pt-12">
          <h1 className="w-11/12 text-4xl font-extrabold text-gray-900 md:text-4xl lg:text-6xl lg:w-11/12 xl:w-full xl:text-6xl f-f-l">
            Mini is mighty
          </h1>
          <div className="pt-10 pb-20 text-base lg:text-base sm:pb-0 xl:pt-6">
            <h2>
              Our smallest devices pack the biggest punch. Check out our
              pocket-friendly smartphones, wearables, and headphones at
              bite-sized prices.
            </h2>
          </div>
          <div className="lg:flex">
            <button className="flex items-center justify-center w-full px-10 py-2 mt-6 text-base font-medium text-white transition duration-700 bg-black border-2 border-white shrink-0 md:w-auto lg:mt-8 md:py-3 hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800">
              Explore Now
            </button>
          </div>
        </div>
        <div>
          <img
            className="object-fill w-full mt-8 md:mt-0 md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0"
            src={image.bannerImg}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
