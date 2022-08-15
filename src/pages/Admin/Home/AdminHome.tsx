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
      <div>Hi</div>
    </DefaultAdminLayout>
  );
};

export default AdminHome;
