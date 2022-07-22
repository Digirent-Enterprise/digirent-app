import { combineReducers } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/product.reducer";
import UserReducer from "./reducers/user.reducer";

const rootReducer = combineReducers({
  product: ProductReducer,
  user: UserReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
