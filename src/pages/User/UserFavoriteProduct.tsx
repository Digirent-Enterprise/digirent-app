import { useTranslation } from "react-i18next";
import { UserTab } from "../../components";
import Helmet from "../../Helmet";
import UnderDevelopmentPage from "../UnderDevelopment/UnderDevelopmentPage";
import DefaultLayout from "../DefaultLayout";

const UserFavoriteProduct = () => {
  const { t } = useTranslation();
  return (
    <DefaultLayout>
      <Helmet
        title={t("FavProd")}
        addPostfixTitle
        description={t("FavProdDes")}
      />
      <UserTab tabIndex={2} />
      <UnderDevelopmentPage />
    </DefaultLayout>
  );
};

export default UserFavoriteProduct;
