import { useTranslation } from "react-i18next";
import {
  MostRentalProduct,
  GreetingCard,
  Stat,
  CategoryPercentage,
  RevenueByMonth,
  TransactionStatus,
  SalesByMonth,
  CategoryRevenue,
  UserStatus,
} from "../../../components";
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
      <GreetingCard />
      <div className="grid gap-6 mx-4 px-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <CategoryPercentage />
        <RevenueByMonth />
        <TransactionStatus />
        <SalesByMonth/>
        <CategoryRevenue/>
        <UserStatus />
      </div>

      <Stat />
      <MostRentalProduct />
    </DefaultAdminLayout>
  );
};

export default AdminHome;
