import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "../rootReducer";

const getProductRequest = (state: AppState) => state.product.pending;

const getProductAvailable = (state: AppState) => state.product.products;

const getProductPending = (state: AppState) => state.product.products;

const getProductError = (state: AppState) => state.product.error;

export const getProductAvailableSelector = createSelector(
  getProductAvailable,
  (products) => products,
);

export const getProductPendingSelector = createSelector(
  getProductPending,
  (products) => products,
);

export const getRequestSelector = createSelector(
  getProductRequest,
  (pending) => pending,
);

export const getProductErrorSelector = createSelector(
  getProductError,
  (error) => error,
);
