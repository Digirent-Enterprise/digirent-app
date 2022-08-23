import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "../rootReducer";

const getAllProducts = (state: AppState) => state.product.products;

export const getAllProductsSelector = createSelector(
  getAllProducts,
  (error) => error,
);

const getProductByID = (state: AppState) => state.product.product;

export const getProductByIDSelector = createSelector(
  getProductByID,
  (error) => error,
);

const getProductError = (state: AppState) => state.product.error;

export const getAllProductsSelector = createSelector(
  getAllProducts,
  (error) => error,
);

const getProductByID = (state: AppState) => state.product.product;

export const getProductByIDSelector = createSelector(
  getProductByID,
  (error) => error,
);

const getProductError = (state: AppState) => state.product.error;

export const getProductErrorSelector = createSelector(
  getProductError,
  (error) => error,
);
