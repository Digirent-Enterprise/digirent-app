import { useTranslation } from "react-i18next";
import { UserTab } from "../../components";
import Helmet from "../../Helmet";
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
    </DefaultLayout>
  );
};

export default UserFavoriteProduct;
