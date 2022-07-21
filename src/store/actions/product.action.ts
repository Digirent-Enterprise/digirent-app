import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_AVAILABLE,
  FETCH_PRODUCTS_ERROR,
} from "../types/action.types";

import {
  FetchProductRequest,
  FetchProductAvailable,
  FetchProductAvailablePayload,
  FetchProductPending,
  FetchProductPendingPayload,
  FetchProductError,
  FetchProductErrorPayload,
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
