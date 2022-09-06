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
      <div className="px-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col">
            <CategoryPercentage />
          </div>
          <div className="flex flex-col">
            <RevenueByMonth />
          </div>
          <div className="flex flex-col">
            <TransactionStatus />
          </div>
          <div className="flex flex-col">
            <SalesByMonth />
          </div>
          <div className="flex flex-col">
            <CategoryRevenue />
          </div>
          <div className="flex flex-col">
            <UserStatus />
          </div>
        </div>
      </div>
      <Stat />
      <MostRentalProduct />
    </DefaultAdminLayout>
  );
};

export default AdminHome;
