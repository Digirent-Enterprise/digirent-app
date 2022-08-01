import { combineReducers } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/product.reducer";
import UserReducer from "./reducers/user.reducer";
import CurrentUserReducer from "./reducers/currentUser.reducer";

const rootReducer = combineReducers({
  product: ProductReducer,
  user: UserReducer,
  currentUser: CurrentUserReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
