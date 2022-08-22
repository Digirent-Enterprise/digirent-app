import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "../rootReducer";

export const getProductError = (state: AppState) => state.product.error;

export const getProductErrorSelector = createSelector(
  getProductError,
  (error) => error,
);

export const getAllProducts = (state: AppState) => state.product.products;
const getProductByID = (state: AppState) => state.product.product;

export const getProductByIDSelector = createSelector(
  getProductByID,
  (error) => error,
)

export const getAllProductsSelector = createSelector(
  getAllProducts,
  (error) => error,
);
