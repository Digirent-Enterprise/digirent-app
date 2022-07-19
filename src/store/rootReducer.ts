import { combineReducers } from "redux";

import errorReducer from "./reducers/errorReducer";

const rootReducer = combineReducers({
  error: errorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
