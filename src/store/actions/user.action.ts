import {
  FetchUserError,
  FetchUserErrorPayload,
  IUser,
  IUserDetail,
} from "../types/user.types";

import {
  GET_USERS,
  GET_USER_DETAIL,
  SET_USER_DETAIL,
  SET_USERS,
  FETCH_USERS_ERROR,
  SAVE_EMAIL,
  SAVE_NAME,
  SAVE_PHONE,
} from "../types/action.types";

export const setUsers = (payload: IUser[]) => {
  return {
    type: SET_USERS,
    payload: {
      users: payload,
      error: null,
    },
  };
};

export const setUserDetail = (payload: IUserDetail) => {
  return {
    type: SET_USER_DETAIL,
    payload,
  };
};

export const getUsers = () => {
  return {
    type: GET_USERS,
  };
};

export const getUserDetail = () => {
  return {
    type: GET_USER_DETAIL,
  };
};

export const saveName = () => {
  return {
    type: SAVE_NAME,
  };
};

export const savePhone = () => {
  return {
    type: SAVE_PHONE,
  };
};

export const saveEmail = () => {
  return {
    type: SAVE_EMAIL,
  };
};

export const fetchUsersError = (
  payload: FetchUserErrorPayload,
): FetchUserError => ({
  type: FETCH_USERS_ERROR,
  payload,
});
