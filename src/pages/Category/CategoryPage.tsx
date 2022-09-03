import { useTranslation } from "react-i18next";
import DefaultLayout from "../DefaultLayout";
import { ProductListingCategory } from "../../components";
import Helmet from "../../Helmet";

const CategoryPage = () => {
  const { t } = useTranslation();
  return (
    <DefaultLayout>
      <Helmet
        title={t("CategoryPageHelmetTitle")}
        addPostfixTitle
        description={t("CategoryPageHelmetDes")}
      />
      <ProductListingCategory />
    </DefaultLayout>
  );
};

export default CategoryPage;
