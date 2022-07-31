import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "../rootReducer";

const getProductError = (state: AppState) => state.product.error;

export const getProductErrorSelector = createSelector(
  getProductError,
  (error) => error,
);

export const getAllProducts = (state: AppState) => state.product.products;
