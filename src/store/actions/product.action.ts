import {
  SET_PRODUCTS,
  GET_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  REMOVE_FROM_FAVORITES,
  ADD_TO_FAVORITES,
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

export const getProductByID = (id: string) => {
  return {
    type: GET_PRODUCT_BY_ID,
    id,
  };
};

export const addToFavorites = (product: any) => {
  const jsonProduct = JSON.stringify(product);
  localStorage.setItem(product._id, jsonProduct);

  return { type: ADD_TO_FAVORITES, payload: product };
};

export const removeFromFavorites = (product: any) => {
  localStorage.removeItem(product._id);

  return {
    type: REMOVE_FROM_FAVORITES,
    payload: product._id,
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
