import { useTranslation } from "react-i18next";
import { MostRentalProduct, GreetingCard, Stat } from "../../../components";
import Helmet from "../../../Helmet";
import DefaultAdminLayout from "../DefaultAdminLayout";

const AdminHome = () => {
  const { t } = useTranslation();
  return (
    <DefaultAdminLayout>
      <Helmet
        title={t("Admin")}
        addPostfixTitle
        description={t("AdminDashboardHelmetDes")}
      />
      {/* Greeting */}
      <GreetingCard />
      <Stat />
      <MostRentalProduct />
    </DefaultAdminLayout>
  );
};

export default AdminHome;
