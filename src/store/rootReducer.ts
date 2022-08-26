import { combineReducers } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/product.reducer";
import UserReducer from "./reducers/user.reducer";
import SaveUserReducer from "./reducers/saveUser.reducer";
import CurrentUserReducer from "./reducers/currentUser.reducer";
import TransactionReducer from "./reducers/transaction.reducer";
import CategoryReducer from "./reducers/category.reducer";
import AppReducer from "./reducers/app.reducer";
import InquiryReducer from "./reducers/inquiry.reducer";

const rootReducer = combineReducers({
  product: ProductReducer,
  user: UserReducer,
  saveUser: SaveUserReducer,
  currentUser: CurrentUserReducer,
  transaction: TransactionReducer,
  inquiry: InquiryReducer,
  category: CategoryReducer,
  app: AppReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
