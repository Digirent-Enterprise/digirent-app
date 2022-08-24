import { SET_PRODUCTS, SET_PRODUCT_BY_ID } from "../types/action.types";

import { ProductActions, ProductState } from "../types/product.types";

export const initialProduct = {
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
};

const initialState: ProductState = {
  product: initialProduct,
  loading: false,
  products: [],
  error: null,
};

const ProductReducer = (state = initialState, action: ProductActions) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    case SET_PRODUCT_BY_ID:
      return {
        ...state,
        loading: false,
        product: action.payload.product,
      };
    default:
      return state;
  }
};

export default ProductReducer;
