import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../rootReducer";

const getAllCategories = (state: AppState) => state.category.categories;
const getCategoriesByID = (state: AppState) => state.category.category;

export const getAllCategoriesSelector = createSelector(
  getAllCategories,
  (error) => error,
);

export const getCategoriesByIdSelector = createSelector(
  getCategoriesByID,
  (error) => error,
);
