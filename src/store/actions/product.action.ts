import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_AVAILABLE,
  FETCH_PRODUCTS_ERROR, SET_PRODUCTS, GET_PRODUCTS,
} from "../types/action.types";

import {
  FetchProductRequest,
  FetchProductAvailable,
  FetchProductAvailablePayload,
  FetchProductPending,
  FetchProductPendingPayload,
  FetchProductError,
  FetchProductErrorPayload, SetProductPayload, IProduct,
} from "../types/product.types";

export const fetchProductRequest = (): FetchProductRequest => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsAvailable = (
  payload: FetchProductAvailablePayload,
): FetchProductAvailable => ({
  type: FETCH_PRODUCTS_AVAILABLE,
  payload,
});

export const fetchProductsPending = (
  payload: FetchProductPendingPayload,
): FetchProductPending => ({
  type: FETCH_PRODUCTS_PENDING,
  payload,
});

export const fetchProductsError = (
  payload: FetchProductErrorPayload,
): FetchProductError => ({
  type: FETCH_PRODUCTS_ERROR,
  payload,
});

export const setProducts = (
    payload: IProduct[],
) => {
  console.log('product data at here', payload)
  return {
    type: SET_PRODUCTS,
    payload: {
      status: 'available',
      products: payload,
      error: null
    },
  }
};


export const getProducts = () => {
  return {
    type: GET_PRODUCTS
  }
}


