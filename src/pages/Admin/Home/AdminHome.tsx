import {
  MostRentalProduct,
  GreetingCard,
  Stat,
  ManageCategory,
} from "../../../components";
import Helmet from "../../../Helmet";
import DefaultAdminLayout from "../DefaultAdminLayout";

const AdminHome = () => {
  return (
    <DefaultAdminLayout>
      <Helmet
        title="Admin"
        addPostfixTitle
        description="Dashboard for administrator"
      />
      {/* Greeting */}
      <GreetingCard />
      <Stat />
      <MostRentalProduct />
      <ManageCategory />
    </DefaultAdminLayout>
  );
};

export default AdminHome;
