import { SET_CATEGORY } from "../types/action.types";

const initialState = {
  pending: false,
  categories: [],
  error: null,
};

const CategoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        pending: false,
        categories: action.payload.categories,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
