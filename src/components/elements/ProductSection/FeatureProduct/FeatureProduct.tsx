import { useTranslation } from "react-i18next";

const FeatureProduct = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                className="absolute inset-0 object-cover w-full h-full"
                src="https://www.hyperui.dev/photos/house-1.jpeg"
                alt="Indoors house"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-[#f3f4f6]">
            <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-[#f3f4f6] lg:block lg:-left-16" />

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">{t("AdTitle")}</h2>

              <p className="mt-4 text-gray">{t("AdBody")}</p>

              <a
                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-[#6366f1] border border-[#4f46e5] rounded active:text-[#6366f1]  hover:bg-transparent hover:text-[#4f46e5] focus:outline-none focus:ring transition duration-700 hover:-translate-y-1 hover:bg-[#f3f4f6] hover:text-gray-800"
                href="/contact"
              >
                {t("getInTouch")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
