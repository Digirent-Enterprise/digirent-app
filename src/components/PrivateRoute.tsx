import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getCurrentUserSelector } from "../store/selectors/user.selector";
import { useEffect, useState } from "react";
import {
  selectAppAuth,
  selectAppLoading,
} from "../store/selectors/app.selector";
import { Spinner } from "./elements";
import { initApp } from "../store/actions/app.action";
import { debounce } from "lodash";

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
      return;
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
