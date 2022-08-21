import {
  SET_PRODUCTS,
  GET_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  SET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_ID,
  FETCH_PRODUCT_BY_ID_ERROR,
} from "../types/action.types";

import {
  FetchProductError,
  FetchProductErrorPayload,
  IProduct,
  FetchProductByIDErrorPayload,
  FetchProductByIDError,
} from "../types/product.types";

export const setProducts = (payload: IProduct[]) => {
  return {
    type: SET_PRODUCTS,
    payload: {
      products: payload,
      error: null,
    },
  };
};

export const setProductByID = (payload: IProduct) => {
  return {
    type: SET_PRODUCT_BY_ID,
    payload: {
      product: payload,
      error: null,
    },
  };
};

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const getProductByID = (_id: string) => {
  return {
    type: GET_PRODUCT_BY_ID,
    payload: {
    _id
    },
  };
};

export const fetchProductsError = (
  payload: FetchProductErrorPayload,
): FetchProductError => ({
  type: FETCH_PRODUCTS_ERROR,
  payload,
});

export const fetchProductByIDError = (
  payload: FetchProductByIDErrorPayload,
): FetchProductByIDError => ({
  type: FETCH_PRODUCT_BY_ID_ERROR,
  payload,
});
