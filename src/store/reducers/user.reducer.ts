import { SET_USERS } from "../types/action.types";
import { UserActions, UserState } from "../types/user.types";

const initialState: UserState = {
  pending: false,
  users: [],
  error: null,
};

const UserReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        pending: false,
        users: action.payload.users,
      };
    default:
      return state;
  }
};

export default UserReducer;
