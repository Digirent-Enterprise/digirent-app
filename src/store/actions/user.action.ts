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
  SAVE_USER_INFO, DELETE_USER_SESSION,
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

export const saveUserInfo = (payload: string) => {
  return {
    type: SAVE_USER_INFO,
    payload: {
      email: payload,
    },
  };
};

export const fetchUsersError = (
  payload: FetchUserErrorPayload,
): FetchUserError => ({
  type: FETCH_USERS_ERROR,
  payload,
});

export const deleteUserSession = () => {
  return {
    type: DELETE_USER_SESSION
  }
}
