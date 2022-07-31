import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../store/selectors/user.selector";

const PrivateRoute = ({ children }: any) => {
  const currentUser = useSelector(getCurrentUser);

  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
