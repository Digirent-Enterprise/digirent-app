import { AdminTab } from "../../components";

const DefaultAdminLayout = ({ children }: any) => {
  return (
    <div>
      <AdminTab />
      {children}
    </div>
  );
};

export default DefaultAdminLayout;
