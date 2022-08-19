import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "../rootReducer";

export const getProductError = (state: AppState) => state.product.error;

export const getProductErrorSelector = createSelector(
  getProductError,
  (error) => error,
);

const getAllProducts = (state: AppState) => state.product.products;
const getProductByID = (state: AppState) => state.product.product;

export const getAllProductsSelector = createSelector(
  getAllProducts,
  (error) => error,
);

export const getProductByIdSelector = createSelector(
  getProductByID,
  (error) => error,
);
