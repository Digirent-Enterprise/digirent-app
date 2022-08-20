import { GET_CATEGORY, SET_CATEGORY, GET_CATEGORY_BY_ID, SET_CATEGORY_BY_ID } from "../types/action.types";
import { ICategory } from "../types/category.types";

export const setCategories = (payload: ICategory[]) => {
  return {
    type: SET_CATEGORY,
    payload: {
      categories: payload,
      error: null,
    },
  };
};

export const getCategories = () => {
  return {
    type: GET_CATEGORY,
  };
};

export const setCategoryByID = (payload: ICategory) => {
  return {
    type: SET_CATEGORY_BY_ID,
    payload: {
      category: payload,
      error: null,
    },
  };
};

export const getCategoryByID = (name: string) => {
  return {
    type: GET_CATEGORY_BY_ID,
    name,
  };
};

