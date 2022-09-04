import { useTranslation } from "react-i18next";
import Helmet from "../../Helmet";
import DefaultLayout from "../DefaultLayout";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <DefaultLayout>
      <Helmet
        title={t("PrivacyPageHelmetTitle")}
        addPostfixTitle
        description={t("PrivacyPageHelmetDes")}
      />
      <div className="py-6 bg-white sm:py-8 lg:py-12">
        <div className="max-w-screen-md px-4 mx-auto md:px-8">
          <h1 className="mb-8 text-4xl font-bold text-center text-black sm:text-6xl md:mb-10">
            {t("PrivacyPolicy")}
          </h1>

          <p className="mb-6 text-black sm:text-lg md:mb-8">
            {t("PrivacyPolicySubContent")}
            <p className="py-6">{t("PrivacyPolicyAdditionalQ")}</p>
            <p>{t("PrivacyPolicyContent")}</p>
          </p>
          <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:mb-8">
            {t("Consent")}
          </h1>
          <p className="mb-6 text-black sm:text-lg md:mb-8">{t("ByUsing")}</p>
          <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:mb-8">
            {t("InfoCollected")}
          </h1>
          <p className="mb-6 text-black sm:text-lg md:mb-8">
            {t("InfoCollectedContent")}
            <p className="py-6">{t("InfoCollectedContent1")}</p>
            <p>{t("InfoCollectedContent2")}</p>
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PrivacyPolicy;
