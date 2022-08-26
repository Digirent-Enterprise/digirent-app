import { SaveUserState } from "../types/user.types";
import { SAVE_USER_INFO } from "../types/action.types";

const initialState: SaveUserState = {
  name: "",
  phone: "",
  email: "",
};

const SaveUserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_USER_INFO:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        phone: action.payload.phone,
      };
    default:
      return state;
  }
};

export default SaveUserReducer;
