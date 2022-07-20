import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer";
import usersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
  product: productsReducer,
  user: usersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
