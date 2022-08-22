import { IProduct } from "./product.types";
export interface ICategory {
  products: IProduct[];
  _id: string;
  name: string;
  image: string;
  queryName: string;
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