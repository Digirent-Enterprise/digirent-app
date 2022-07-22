import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_AVAILABLE,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_PENDING,
} from "./action.types";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  status: "available" | "pending";
  rentalCost: number;
  imagePath: string;
}

export interface ProductState {
  pending: boolean;
  products: IProduct[];
  error: string | null;
}

export interface FetchProductAvailablePayload {
  products: IProduct[];
  status: "available";
}

export interface FetchProductPendingPayload {
  products: IProduct[];
  status: "pending";
}

export interface FetchProductErrorPayload {
  error: string;
}

export interface FetchProductRequest {
  type: typeof FETCH_PRODUCTS_REQUEST;
}

export type FetchProductAvailable = {
  type: typeof FETCH_PRODUCTS_AVAILABLE;
  payload: FetchProductAvailablePayload;
};

export type FetchProductPending = {
  type: typeof FETCH_PRODUCTS_PENDING;
  payload: FetchProductPendingPayload;
};

export type FetchProductError = {
  type: typeof FETCH_PRODUCTS_ERROR;
  payload: FetchProductErrorPayload;
};

export type ProductActions =
  | FetchProductRequest
  | FetchProductAvailable
  | FetchProductPending
  | FetchProductError;
