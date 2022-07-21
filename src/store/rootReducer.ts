import { combineReducers } from "@reduxjs/toolkit";
import ModalReducer from "./reducers/modal.reducer";
import ProductReducer from "./reducers/product.reducer";
import UserReducer from "./reducers/user.reducer";

const rootReducer = combineReducers({
  product: ProductReducer,
  user: UserReducer,
  modal: ModalReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
