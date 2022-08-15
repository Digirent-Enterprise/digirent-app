import { FETCH_PRODUCTS_ERROR } from "./action.types";

export interface IProduct {
  _id: string;
  name: string;
  serial: string;
  brand: string;
  category: string;
  description: string;
  status: boolean;
  rentalCost: number;
  rentalCostType: string;
  images: string[];
}

export interface ProductState {
  pending: boolean;
  products: IProduct[];
  error: string | null;
}
export interface SetProductPayload {
  products: IProduct[];
}

export type SetProduct = {
  type: string;
  payload: SetProductPayload;
};

export interface FetchProductErrorPayload {
  error: string;
}
export type FetchProductError = {
  type: typeof FETCH_PRODUCTS_ERROR;
  payload: FetchProductErrorPayload;
};

export type ProductActions = FetchProductError | SetProduct;
