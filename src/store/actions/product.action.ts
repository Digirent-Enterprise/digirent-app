import {
  SET_PRODUCTS,
  GET_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
} from "../types/action.types";

import {
  FetchProductError,
  FetchProductErrorPayload,
  IProduct,
} from "../types/product.types";

export const setProducts = (payload: IProduct) => {
  return {
    type: SET_PRODUCTS,
    payload: {
      products: payload,
      error: null,
    },
  };
};

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const fetchProductsError = (
  payload: FetchProductErrorPayload,
): FetchProductError => ({
  type: FETCH_PRODUCTS_ERROR,
  payload,
});
