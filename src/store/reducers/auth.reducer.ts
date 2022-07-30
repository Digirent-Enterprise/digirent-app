import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from "../types/action.types";

const initialState = {
  pending: false,
};

const AuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
      };
    case LOGIN_FAILED:
      return initialState;
    case REGISTER_SUCCESS:
      return {
        ...state,
        pending: false,
      };
    case REGISTER_FAILED:
      return initialState;
    case LOGOUT_SUCCESS:
      return {
        ...state,
        pending: false,
      };
    case LOGOUT_FAILED:
      return initialState;
    default:
      return state;
  }
};

export default AuthReducer;
