import { SET_CATEGORY, SET_CATEGORY_BY_ID } from "../types/action.types";
import { CategoryActions, CategoryState } from "../types/category.types";
import { initialProduct } from "./product.reducer";

const initialCategory = {
  _id: "",
  products: initialProduct,
  name: "",
  image: "",
  queryName: "",
  bannerUrl: "",
};

const initialState: CategoryState = {
  category: [initialCategory],
  loading: false,
  categories: [],
  error: null,
};

const CategoryReducer = (state = initialState, action: CategoryActions) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        loading: false,
        categories: action.payload.categories!,
      };
    case SET_CATEGORY_BY_ID:
      return {
        ...state,
        loading: false,
        category: action.payload.category!,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
