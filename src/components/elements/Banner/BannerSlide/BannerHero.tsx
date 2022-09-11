import { useTranslation } from "react-i18next";

const BannerHero = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full h-full text-white bg-banner bg-no-repeat bg-cover">
      <div className="max-w-screen-xl px-4 py-32 mx-auto lg:items-center lg:flex">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-[#86efac] via-blue-200 to-[#9333ea]">
            {t("bannerHeroTitle")}
          </h1>

          <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
            {t("bannerHeroDes")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-200 border border-blue-200 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
              href="/products"
            >
              {t("getStarted")}
            </a>

            <a
              className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-200 rounded sm:w-auto hover:bg-blue-200 active:bg-[#3B82F6] focus:outline-none focus:ring"
              href="/about"
            >
              {t("learnmore")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHero;
