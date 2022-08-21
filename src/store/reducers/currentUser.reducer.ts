import { DELETE_USER_SESSION, SET_USER_DETAIL } from "../types/action.types";
import { CurrentUserState } from "../types/user.types";

const initialState: CurrentUserState = {
  _id: "",
  role: "",
  name: "",
  email: "",
  phone: "",
  avatar: "",
};

const CurrentUserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DETAIL:
      return {
        ...action.payload,
      };
    case DELETE_USER_SESSION:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default CurrentUserReducer;
