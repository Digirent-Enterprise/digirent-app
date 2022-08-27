import { useTranslation } from "react-i18next";

const Search = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#EEF2FF]">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] md:text-4xl">
          <span className="block">{t("readyToDiveIn?")}</span>
          <span className="block text-[#4F46E5]">{t("startYourRental")}</span>
        </h2>
        <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#4F46E5] hover:bg-[#4338CA]"
            >
              {t("searchAllProducts")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
