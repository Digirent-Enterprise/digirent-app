import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCT_BY_ID_ERROR,
} from "./action.types";

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
  createdDate: Date;
}

export interface ProductState {
  loading: boolean;
  products: IProduct[];
  product: IProduct;
  error: string | null;
}
export interface SetProductPayload {
  product: IProduct;
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

export interface FetchProductByIDErrorPayload {
  error: string;
}
export type FetchProductByIDError = {
  type: typeof FETCH_PRODUCT_BY_ID_ERROR;
  payload: FetchProductByIDErrorPayload;
};

export type ProductActions = FetchProductError | SetProduct;
