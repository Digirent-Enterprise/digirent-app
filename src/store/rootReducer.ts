import { combineReducers } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/product.reducer";
import UserReducer from "./reducers/user.reducer";
import SaveUserReducer from "./reducers/saveUser.reducer";
import CurrentUserReducer from "./reducers/currentUser.reducer";
import FavoritesReducer from "./reducers/favorites.reducer";
import TransactionReducer from "./reducers/transaction.reducer";
import CategoryReducer from "./reducers/category.reducer";

const rootReducer = combineReducers({
  product: ProductReducer,
  user: UserReducer,
  saveUser: SaveUserReducer,
  currentUser: CurrentUserReducer,
  favorites: FavoritesReducer,
  transaction: TransactionReducer,
  category: CategoryReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
