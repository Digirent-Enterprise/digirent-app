import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";

// disable thunk and add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// Mount it on the Store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;
