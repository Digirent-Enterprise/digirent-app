import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Testimonial = () => {
  return (
    <section className="bg-[#f3f4f6]">
      <div className="px-4 py-16 mx-auto sm:px-6 lg:pl-8 lg:pr-0 lg:mr-0 sm:py-24 max-w-[1340px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-16 gap-y-8 lg:items-center">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Don't just take our word for it...
              <br className="hidden sm:block lg:hidden" />
              Read reviews from our customers
            </h2>

            <p className="mt-4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              veritatis illo placeat harum porro optio fugit a culpa sunt id!
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                className="p-3 text-black border border-black rounded-full hover:bg-black hover:text-white prev-button"
              >
                <svg
                  className="w-5 h-5 transform -rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                className="p-3 text-black border border-black rounded-full hover:bg-black hover:text-white next-button"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <Swiper
              loop
              slidesPerView={1}
              spaceBetween={32}
              autoplay={{
                delay: 8000,
              }}
              breakpoints={{
                640: {
                  centeredSlides: true,
                  slidesPerView: 1.25,
                },
                1024: {
                  centeredSlides: false,
                  slidesPerView: 1.5,
                },
              }}
              observer
              observeParents
              parallax
              style={{ overflow: "hidden" }}
              navigation={{
                prevEl: ".prev-button",
                nextEl: ".next-button",
              }}
            >
              <ul className="swiper-wrapper">
                <SwiperSlide>
                  <blockquote className="flex flex-col justify-between h-full p-12 bg-white">
                    <div>
                      <div className="flex gap-0.5">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>

                      <div className="mt-4">
                        <p className="text-2xl font-bold text-black sm:text-3xl">
                          Stayin' Alive
                        </p>

                        <p className="mt-4 leading-relaxed text-gray-500">
                          No, Rose, they are not breathing. And they have no
                          arms or legs … Where are they? You know what? If we
                          come across somebody with no arms or legs, do we
                          bother resuscitating them? I mean, what quality of
                          life do we have there?
                        </p>
                      </div>
                    </div>

                    <footer className="mt-8 text-sm text-gray-500">
                      &mdash; Michael Scott
                    </footer>
                  </blockquote>
                </SwiperSlide>

                <SwiperSlide>
                  <blockquote className="flex flex-col justify-between h-full p-12 bg-white">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>

                      <div className="mt-4">
                        <p className="text-2xl font-bold text-black sm:text-3xl">
                          Stayin' Alive
                        </p>

                        <p className="mt-4 leading-relaxed text-gray-500">
                          No, Rose, they are not breathing. And they have no
                          arms or legs … Where are they? You know what? If we
                          come across somebody with no arms or legs, do we
                          bother resuscitating them? I mean, what quality of
                          life do we have there?
                        </p>
                      </div>
                    </div>

                    <footer className="mt-8 text-sm text-gray-500">
                      &mdash; Michael Scott
                    </footer>
                  </blockquote>
                </SwiperSlide>

                <SwiperSlide>
                  <blockquote className="flex flex-col justify-between h-full p-12 bg-white">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>

                      <div className="mt-4">
                        <p className="text-2xl font-bold text-black sm:text-3xl">
                          Stayin' Alive
                        </p>

                        <p className="mt-4 leading-relaxed text-gray-500">
                          No, Rose, they are not breathing. And they have no
                          arms or legs … Where are they? You know what? If we
                          come across somebody with no arms or legs, do we
                          bother resuscitating them? I mean, what quality of
                          life do we have there?
                        </p>
                      </div>
                    </div>

                    <footer className="mt-8 text-sm text-gray-500">
                      &mdash; Michael Scott
                    </footer>
                  </blockquote>
                </SwiperSlide>
              </ul>
            </Swiper>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8 lg:hidden">
          <button
            aria-label="Previous slide"
            className="p-4 text-black border border-black rounded-full hover:bg-black hover:text-white prev-button"
          >
            <svg
              className="w-5 h-5 transform -rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            className="p-4 text-black border border-black rounded-full hover:bg-black hover:text-white next-button"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
