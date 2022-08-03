import { SET_USER_DETAIL } from "../types/action.types";
import { CurrentUserState } from "../types/user.types";

const initialState: CurrentUserState = {
  _id: "",
  role: "",
  isEmailVerified: false,
  name: "",
  email: "",
  phone: "",
};

const CurrentUserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DETAIL:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default CurrentUserReducer;
