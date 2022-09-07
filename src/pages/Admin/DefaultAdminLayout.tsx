import { useTranslation } from "react-i18next";
import { AdminTab } from "../../components";
import Helmet from "../../Helmet";
import DefaultLayout from "../DefaultLayout";

const DefaultAdminLayout = ({ children }: any) => {
  const { t } = useTranslation();
  return (
    <DefaultLayout>
      <Helmet
        title={t("DefAdminsLayoutHelmetTitle")}
        addPostfixTitle
        description={t("DefAdminsLAyoutHelmetDes")}
      />
      <AdminTab />
      {children}
    </DefaultLayout>
  );
};

export default DefaultAdminLayout;
