import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentUserSelector } from "../store/selectors/user.selector";
import {
  selectAppAuth,
  selectAppLoading,
} from "../store/selectors/app.selector";
import { Spinner } from "./elements";
import { initApp } from "../store/actions/app.action";

const PrivateRoute = ({ children, permission = [] }: any) => {
  const currentUser = useSelector(getCurrentUserSelector);
  const [isAllow, setIsAllow] = useState(false);
  const appLoading = useSelector(selectAppLoading);
  const appAuth = useSelector(selectAppAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!appLoading) {
      dispatch(initApp());
    }
    if (!localStorage.getItem("currentUser")) {
      setIsAllow(false);
      navigate("/");
    }
  }, []);

  useEffect(() => {
    setIsAllow(permission.includes(appAuth));
  }, [currentUser, appAuth]);

  useEffect(() => {
    setTimeout(() => {
      if (!permission.includes(appAuth) && appLoading) {
        navigate("/");
      }
    }, 3000);
  }, [appAuth]);

  return !appLoading ? <Spinner /> : isAllow ? children : <Spinner />;
};

export default PrivateRoute;
