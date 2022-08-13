import { SET_CATEGORY } from "../types/action.types";

import { CategoryActions, CategoryState } from "../types/category.types";

const initialState: CategoryState = {
  pending: false,
  categories: [],
  error: null,
};

const CategoryReducer = (state = initialState, action: CategoryActions) => {
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
