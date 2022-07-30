import {
  FetchUserError,
  FetchUserErrorPayload,
  IUser,
} from "../types/user.types";
import { SET_USERS, GET_USERS, FETCH_USERS_ERROR } from "../types/action.types";

export const setUsers = (payload: IUser[]) => {
  return {
    type: SET_USERS,
    payload: {
      users: payload,
      error: null,
    },
  };
};

export const getUsers = () => {
  return {
    type: GET_USERS,
  };
};
export const fetchUsersError = (
  payload: FetchUserErrorPayload,
): FetchUserError => ({
  type: FETCH_USERS_ERROR,
  payload,
});
