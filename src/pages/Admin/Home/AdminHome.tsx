import { MostRentalProduct, GreetingCard, Stat } from "../../../components";
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
    </DefaultAdminLayout>
  );
};

export default AdminHome;
