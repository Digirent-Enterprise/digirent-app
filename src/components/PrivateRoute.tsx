import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../store/selectors/user.selector";
import {debounce} from "lodash";
import {useCallback, useEffect} from "react";
import {selectAppLoading} from "../store/selectors/app.selector";
import {getAppLoading} from "../store/actions/app.action";
import Spinner from "./elements/Spinner/Spinner";

const PrivateRoute = ({ children, permission = [] }: any) => {
  const currentUser = useSelector(getCurrentUser);
  const loading = useSelector(selectAppLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const debounceNavigate = debounce(() => {
    return navigate('/');
  }, 200)

  const onNavigate = useCallback(() => {
    if (permission && currentUser.role && !permission.includes(currentUser.role) && loading) {
      debounceNavigate();
    }
  }, [currentUser, loading])

  useEffect(() => {
    if (!loading) dispatch(getAppLoading());
    else {
      onNavigate()
    }
  }, [loading, currentUser])

  return loading && permission.includes(currentUser.role) ? children : <Spinner/>;
};

export default PrivateRoute;
