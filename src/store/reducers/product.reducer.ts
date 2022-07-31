import { SET_PRODUCTS } from "../types/action.types";

import { ProductActions, ProductState } from "../types/product.types";

const initialState: ProductState = {
  pending: false,
  products: [],
  error: null,
};

const ProductReducer = (state = initialState, action: ProductActions) => {
  switch (action.type) {
    case SET_PRODUCTS:
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
