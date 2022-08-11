import { GET_CATEGORY, SET_CATEGORY } from "../types/action.types";

export const setCategories = (payload: any) => {
  return {
    type: SET_CATEGORY,
    payload: {
      products: payload,
      error: null,
    },
  };
};

export const getCategories = () => {
  return {
    type: GET_CATEGORY,
  };
};
