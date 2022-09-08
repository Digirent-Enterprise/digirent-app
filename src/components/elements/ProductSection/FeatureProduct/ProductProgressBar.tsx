/* eslint-disable react/jsx-no-constructed-context-values */
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { BiPurchaseTag } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IconContext } from "react-icons";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { customAxios } from "../../../../http-common";
import { IMostRentalProduct } from "../../../../store/types/product.types";
import Spinner from "../../Spinner/Spinner";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ProductProgressBar = () => {
  const { t } = useTranslation();

  const [mostRentalProducts, setMostRentalProducts] = useState<
    IMostRentalProduct[]
  >([]);

  useEffect(() => {
    customAxios()
      .get("product/most-rental")
      .then((res: any) => {
        const { data } = res;
        const sortedProducts = data.sort((itemA: any, itemB: any) =>
          itemA.rentalTimes > itemB.rentalTimes ? -1 : 1,
        );
        const mostRentalSortedProducts = sortedProducts.slice(0, 4);
        setMostRentalProducts(mostRentalSortedProducts);
      });
  }, []);
  return (
    <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
      <div>
        <span className="inline-block w-12 h-1 bg-[#b91c1c]" />

        <h2 className="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
          {t("featuredProduct")}
        </h2>
      </div>

      <div className="mt-4">
        <Swiper
          loop
          slidesPerView={1}
          spaceBetween={32}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          observer
          observeParents
          parallax
          pagination={{
            type: "progressbar",
            el: ".swiper-pagination",
          }}
        >
          <ul className="swiper-wrapper">
            {mostRentalProducts &&
            Object.keys(mostRentalProducts).length > 0 ? (
              <>
                {mostRentalProducts.map((rental) => (
                  <SwiperSlide>
                    <a
                      href={`/product/${rental._id._id}`}
                      className="relative block transition duration-700 border border-[#f3f4f6] hover:-translate-y-5"
                    >
                      <button
                        type="button"
                        name="wishlist"
                        className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>

                      <img
                        loading="lazy"
                        alt="rental"
                        className="object-cover w-full h-56 lg:h-72"
                        src={rental._id.images && rental._id.images[0]}
                      />

                      <div className="p-6">
                        <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-black">
                          {t("Featured")}
                        </span>

                        <h5 className="mt-4 text-lg font-bold">
                          {rental._id.name}
                        </h5>

                        <p className="mt-2 text-sm font-medium text-[#4b5563]">
                          ${rental._id.rentalCost}
                        </p>
                        <Link to={`/product/${rental._id._id}`}>
                          <button
                            name="add"
                            type="button"
                            className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-black rounded-sm transition duration-700 hover:-translate-y-1 hover:bg-[#f3f4f6] rent-button"
                          >
                            <span className="text-sm font-medium text-white">
                              {t("rentNowBTN")}
                            </span>

                            <IconContext.Provider
                              value={{ className: "w-5 h-5 ml-1.5" }}
                            >
                              <div className="text-white">
                                <BiPurchaseTag />
                              </div>
                            </IconContext.Provider>
                          </button>
                        </Link>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
              </>
            ) : (
              <Spinner />
            )}
          </ul>

          <div className="max-w-3xl mx-auto mt-8 swiper-pagination" />
        </Swiper>
      </div>
    </div>
  );
};

export default ProductProgressBar;
