import { IProduct } from "./product.types";
export interface ICategory {
  products: IProduct | string;
  _id: string;
  name: string;
  image: string;
  queryName: string;
  bannerUrl: string;
}

export interface CategoryState {
  pending: boolean;
  categories: ICategory[];
  category: ICategory;
  error: string | null;
}

export type CategoryAction = {
  type: string;
  payload: {
    categories?: ICategory[];
    category?: ICategory;
  };
};


export type CategoryActions = CategoryAction;
