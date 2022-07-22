import {
  FETCH_USERS_ACTIVE,
  FETCH_USERS_DEACTIVATE,
  FETCH_USERS_ERROR,
} from "../types/action.types";

interface UserAction {
  type: string;
  payload: string;
  error: Error | string;
}

const initialState = {
  active: false,
  users: [],
  error: null,
};

const UserReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case FETCH_USERS_ACTIVE:
      return {
        ...state,
        active: true,
        users: action.payload,
      };
    case FETCH_USERS_DEACTIVATE:
      return {
        ...state,
        active: false,
        users: action.payload,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        active: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default UserReducer;
