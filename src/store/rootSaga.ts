import { all, fork } from "redux-saga/effects";

import productSaga from "./sagas/product.saga";
import userSaga from "./sagas/user.saga";

export function* rootSaga() {
  yield all([fork(productSaga), fork(userSaga)]);
}
