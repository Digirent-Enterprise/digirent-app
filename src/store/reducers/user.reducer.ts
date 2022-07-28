import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
} from "../types/user.types";

const initialState = {
  authenticated: false,
  credentials: {},
  loading: false,
};

interface UserAction {
  type: string;
  payload: any;
}
const UserReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default UserReducer;
