import { IProduct } from "./product.types";
export interface ICategory {
  products: string[];
  id: string;
  name: string;
  image: string;
}

export interface CategoryState {
  pending: boolean;
  categories: ICategory[];
  category: ICategory;
  error: string | null;
}

export interface SetCategoryPayload {
  categories: ICategory[];
  category: ICategory;
}

export type SetCategory = {
  type: string;
  payload: SetCategoryPayload;
};

export type CategoryActions = SetCategory;
