import { useTranslation } from "react-i18next";

const OurStory = () => {
  const {t} = useTranslation();
  return (
    <div className="relative w-full h-full px-6 py-32 bg-gray-800 sm:py-40 sm:px-12 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
          alt=""
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-[#111827]/50" />
      <div className="relative flex flex-col items-center max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {t("ourStoryTitle")}
        </h2>
        <p className="mt-3 text-xl text-white">{t("ourStoryDes")}</p>
        <a
          href="/about"
          className="block w-full px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100 sm:w-auto"
        >
          {t("readOurStory")}
        </a>
      </div>
    </div>
  );
};

export default OurStory;
