import { AdminTab, Transition } from "../../components";

const DefaultAdminLayout = ({ children }: any) => {
  return (
    <Transition>
      <AdminTab />
      {children}
    </Transition>
  );
};

export default DefaultAdminLayout;
