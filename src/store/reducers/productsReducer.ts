import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_AVAILABLE,
  FETCH_PRODUCTS_ERROR,
} from "../types/action.types";

interface ProductAction {
  type: string;
  payload: string;
  error: Error | string;
}

const initialState = {
  pending: false,
  products: [],
  error: null,
};

const productsReducer = (state = initialState, action: ProductAction) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true,
        products: action.payload,
      };
    case FETCH_PRODUCTS_AVAILABLE:
      return {
        ...state,
        pending: false,
        products: action.payload,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default productsReducer;
