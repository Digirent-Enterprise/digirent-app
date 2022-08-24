import { SET_CATEGORY, SET_CATEGORY_BY_ID } from "../types/action.types";
import { CategoryActions, CategoryState } from "../types/category.types";

const initialCategory = {
  _id: "",
  products: {
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
  name: "",
  image: "",
  queryName: "",
  bannerUrl: "",
};

const initialState: CategoryState = {
  category: [initialCategory],
  pending: false,
  categories: [],
  error: null,
};

const CategoryReducer = (state = initialState, action: CategoryActions) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        pending: false,
        categories: action.payload.categories!,
      };
    case SET_CATEGORY_BY_ID:
      return {
        ...state,
        pending: false,
        category: action.payload.category!,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
