import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_AVAILABLE,
  FETCH_PRODUCTS_ERROR,
} from "../types/action.types";
import baseURL from "../../utils/api/api";

export const fetchProductsPending = () => {
  return async (dispatch) => {
    const response = await baseURL.get("/admin/products");
    dispatch({ type: FETCH_PRODUCTS_PENDING, payload: response });
  };
};

export const fetchProductsAvailable = () => {
  return async (dispatch) => {
    const response = await baseURL.get("/admin/products");
    dispatch({ type: FETCH_PRODUCTS_AVAILABLE, payload: response });
  };
};

export const fetchProductsError = (error) => {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error,
  };
};
