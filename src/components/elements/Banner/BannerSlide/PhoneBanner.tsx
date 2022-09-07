import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { IMAGES } from "../../../../utils/constants/image.constant";

const PhoneCategoryBanner = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full h-full pb-10 bg-black">
      <div className="container relative items-center gap-8 px-4 mx-auto xl:px-0 md:flex">
        <div className="w-full pt-16 pl-20 text-color md:w-1/3 lg:pt-32 xl:pt-12">
          <h1 className="w-11/12 text-4xl font-extrabold text-white md:text-4xl lg:text-6xl lg:w-11/12 xl:w-full xl:text-6xl">
            {t("phoneCategoryBannerTitle")}
          </h1>
          <div className="pt-10 pb-20 text-base text-white lg:text-base sm:pb-0 xl:pt-6">
            <h2>{t("phoneCategoryBannerDes")}</h2>
          </div>
          <div className="lg:flex">
            <Link to="/products">
              <button className="flex items-center justify-center w-full px-10 py-2 mt-6 text-base font-medium text-black transition duration-700 bg-white border-2 border-black shrink-0 md:w-auto lg:mt-8 md:py-3 hover:-translate-y-1 ">
                {t("exploreNow")}
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            loading="lazy"
            className="object-fill w-full mt-8 md:mt-0 md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0"
            src={IMAGES.phoneBannerImg}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneCategoryBanner;
