import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCurrentUserSelector } from "../store/selectors/user.selector";

const PrivateRoute = ({ children, permission = [] }: any) => {
  const currentUser = useSelector(getCurrentUserSelector);
  const isAllow = permission.includes(currentUser.role) || !permission;
  if (!isAllow) return <Navigate to="/" />;

  return children;
};

export default PrivateRoute;
