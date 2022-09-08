import { useTranslation } from "react-i18next";

const Content = () => {
  const { t } = useTranslation();
  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      <div className="max-w-screen-md px-4 mx-auto md:px-8">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-800 sm:text-3xl md:mb-6">
          {t("AboutTitle")}
        </h1>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
          {t("AboutFirstSect")}
          <br />
          <br />
          {t("AboutSecondSectP1")}{" "}
          <a
            href="/maintain"
            className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
          >
            {t("AboutSecondSectHighlight")}
          </a>{" "}
          {t("AboutSecondSectP2")}
        </p>

        <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">
          {t("AboutUs")}
        </h2>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
          {t("AboutUsContent")}
        </p>

        <ul className="mb-6 text-gray-500 list-disc list-inside sm:text-lg md:mb-8">
          <li>{t("Bullet1")}</li>
          <li>{t("Bullet2")}</li>
          <li>{t("Bullet3")}</li>
        </ul>

        <blockquote className="pl-4 mb-6 italic text-gray-500 border-l-4 sm:text-lg md:pl-6 md:mb-8">
          “{t("Quote")}”
        </blockquote>

        <div className="relative mb-6 overflow-hidden bg-gray-100 rounded-lg shadow-lg md:mb-8">
          <img
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350"
            loading="lazy"
            alt="partner"
            className="object-cover object-center w-full h-full"
          />
        </div>

        <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">
          {t("Feature")}
        </h2>

        <p className="text-gray-500 sm:text-lg">{t("FeaturesContent")}</p>
      </div>
    </div>
  );
};

export default Content;
