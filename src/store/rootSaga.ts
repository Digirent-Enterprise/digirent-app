import { all, fork } from "redux-saga/effects";

import productSaga from "./sagas/product.saga";

export function* rootSaga() {
  yield all([fork(productSaga)]);
}
