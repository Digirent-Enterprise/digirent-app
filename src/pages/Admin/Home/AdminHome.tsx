import {
  MostRentalProduct,
  GreetingCard,
  Stat,
  CategoryPercentage,
  RevenueByMonth,
  TransactionStatus,
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
        <div className="flex mx-2">
          <CategoryPercentage />
          <RevenueByMonth />
          <TransactionStatus />
        </div>
      </div>
      <Stat />
      <MostRentalProduct />
    </DefaultAdminLayout>
  );
};

export default AdminHome;
