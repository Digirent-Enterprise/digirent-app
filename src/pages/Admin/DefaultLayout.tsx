import { AdminTab } from "../../components";

const DefaultLayout = ({ children }: any) => {
  return (
    <div>
      <AdminTab />
      {children}
    </div>
  );
};

export default DefaultLayout;
