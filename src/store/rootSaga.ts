import { all, fork } from "redux-saga/effects";

import productSaga from "./sagas/productsSaga";

export function* rootSaga() {
  yield all([fork(productSaga)]);
}
