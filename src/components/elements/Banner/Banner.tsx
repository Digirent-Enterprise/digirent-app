import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import PhoneCategoryBanner from "./BannerSlide/PhoneBanner";
import OurStory from "./BannerSlide/OurStory";
import BannerHero from "./BannerSlide/BannerHero";

const Banner = () => {
  return (
    <div className="container-3">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        updateOnWindowResize
        observer
        observeParents
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerHero />
        </SwiperSlide>
        <SwiperSlide>
          <OurStory />
        </SwiperSlide>
        <SwiperSlide>
          <PhoneCategoryBanner />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
