import { AppState } from "../rootReducer";

export const getAllCategories = (state: AppState) => state.category.categories;
