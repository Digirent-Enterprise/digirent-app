import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_AVAILABLE,
  FETCH_PRODUCTS_ERROR,
} from "../types/action.types";

import baseURL from "../../utils/api/api";

export const fetchProductsAvailable = () => {
  return async (
    dispatch: (arg0: { type: string; payload?: any; error?: unknown }) => void,
  ) => {
    try {
      const response = await baseURL.get("/admin/products");
      dispatch({
        type: FETCH_PRODUCTS_AVAILABLE,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        error,
      });
    }
  };
};

export const fetchProductsPending = () => {
  return async (
    dispatch: (arg0: { type: string; payload?: any; error?: unknown }) => void,
  ) => {
    try {
      const response = await baseURL.get("/admin/products");
      dispatch({
        type: FETCH_PRODUCTS_PENDING,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        error,
      });
    }
  };
};
