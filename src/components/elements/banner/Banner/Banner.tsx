import React from "react";
import image from "../../../../utils/constants/image.constant";

const Banner = () => {
  return (
    <div className="relative w-full h-full pb-10">
      <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
        <div className="pl-20 text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
          <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-extrabold f-f-l">
            Mini is mighty
          </h1>
          <div className="text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
            <h2>
              Our smallest devices pack the biggest punch. Check out our
              pocket-friendly smartphones, wearables, and headphones at
              bite-sized prices.
            </h2>
          </div>
          <div className="lg:flex">
            <button className="bg-black mt-6 shrink-0 w-full md:w-auto lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
              Explore Now
            </button>
          </div>
        </div>
        <div>
          <img
            className="w-full mt-8 md:mt-0 object-fill md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0"
            src={image.bannerImg}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
