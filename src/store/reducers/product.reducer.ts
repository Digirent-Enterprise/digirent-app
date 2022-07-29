import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_AVAILABLE,
  FETCH_PRODUCTS_ERROR,
  SET_PRODUCTS
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
    case SET_PRODUCTS:
      console.log('new product', action.payload)
      return {
        ...state,
        pending: false,
        products: action.payload.products,
      };
    default:
      return state;
  }
};

export default ProductReducer;
