import {
  SET_PRODUCTS,
  SET_PRODUCT_BY_ID,
  FETCH_PRODUCT_BY_ID_ERROR,
} from "../types/action.types";

import { ProductActions, ProductState } from "../types/product.types";

const initialState: ProductState = {
  product: {
    _id: "",
    name: "",
    serial: "",
    brand: "",
    description: "",
    status: false,
    rentalCost: 0,
    rentalCostType: "",
    images: [],
    category: "",
    createdDate: new Date(),
  },
  pending: false,
  products: [],
  error: null,
};

const ProductReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        pending: false,
        products: action.payload.products,
      };
    case SET_PRODUCT_BY_ID:
      return {
        ...state,
        pending: false,
        product: action.payload.product,
      };
    case FETCH_PRODUCT_BY_ID_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default ProductReducer;
