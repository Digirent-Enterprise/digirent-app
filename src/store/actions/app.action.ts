import { INIT_APP, SET_APP_LOADING, SET_APP_AUTH } from "../types/action.types";
import { AppAuth } from "../types/app.types";

export const setAppLoading = (loading: boolean) => {
  return {
    type: SET_APP_LOADING,
    payload: {
      loading,
    },
  };
};

export const setAppAuth = (auth: AppAuth) => {
  return {
    type: SET_APP_AUTH,
    payload: {
      auth,
    },
  };
};

export const initApp = () => {
  return {
    type: INIT_APP,
  };
};
