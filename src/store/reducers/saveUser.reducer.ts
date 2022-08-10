import { SAVE_EMAIL, SAVE_NAME, SAVE_PHONE } from "../types/action.types";
import { SaveUserAction } from "../types/user.types";

const initialState = {
  name: "",
  phone: "",
  email: "",
};

const SaveUserReducer = (state = initialState, action: SaveUserAction) => {
  switch (action.type) {
    case SAVE_NAME:
      return { ...state, name: action.value.name };
    case SAVE_PHONE:
      return { ...state, phone: action.value.phone };
    case SAVE_EMAIL:
      return { ...state, email: action.value.email };
    default:
      return state;
  }
};

export default SaveUserReducer;
