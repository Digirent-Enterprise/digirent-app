import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "../rootReducer";

export const getProductError = (state: AppState) => state.product.error;

export const getProductErrorSelector = createSelector(
  getProductError,
  (error) => error,
);

export const getAllProducts = (state: AppState) => state.product;
export const getProductByID = (state: AppState) => state.product.product;

export const getAllProductsSelector = createSelector(
  getAllProducts,
  (error) => error,
);
