import { useTranslation } from "react-i18next";
import TechnologyCard from "./TechnologyCard";
import { techStack } from "../../../utils/constants/helper.constant";

const Technology = () => {
  const { t } = useTranslation();
  return (
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
      <div className="mb-10 md:mb-16">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          {t("Technology")}
        </h2>

        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          {t("TechnologyContent")}
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
        {techStack.map((value) => (
          <TechnologyCard
            title={value.title}
            alt={value.alt}
            imageUrl={value.imageUrl}
            description={value.description}
            detailUrl={value.detailUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Technology;
