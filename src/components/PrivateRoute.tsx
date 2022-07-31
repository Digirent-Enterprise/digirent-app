import { Navigate } from "react-router-dom";
import { AppState } from "../store/rootReducer";

const PrivateRoute = ({ children }: any) => {
  const currentUser = (state: AppState) => state.currentUser;

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
