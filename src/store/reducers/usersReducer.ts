import { FETCH_USER } from "../types/action.types";

const usersReducer = (state = [], action: any) => {
  switch (action.type) {
    case FETCH_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default usersReducer;
