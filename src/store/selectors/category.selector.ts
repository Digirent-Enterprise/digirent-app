import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../rootReducer";

const getAllCategories = (state: AppState) => state.category.categories;

export const getAllCategoriesSelector = createSelector(
  getAllCategories,
  (error) => error,
);
