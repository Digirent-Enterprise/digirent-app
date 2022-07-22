import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_AVAILABLE,
  FETCH_PRODUCTS_ERROR,
} from "../types/action.types";

import { ProductActions, ProductState } from "../types/product.types";

const initialState: ProductState = {
  pending: false,
  products: [],
  error: null,
};

const ProductReducer = (state = initialState, action: ProductActions) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: false,
        products: action.payload.products,
      };
    case FETCH_PRODUCTS_AVAILABLE:
      return {
        ...state,
        pending: false,
        products: action.payload.products,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default ProductReducer;
