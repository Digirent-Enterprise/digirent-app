import { AdminTab } from "../../components";
import DefaultLayout from "../DefaultLayout";

const DefaultAdminLayout = ({ children }: any) => {
  return (
    <DefaultLayout>
      <AdminTab />
      {children}
    </DefaultLayout>
  );
};

export default DefaultAdminLayout;
