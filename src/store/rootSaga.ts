import { all, fork } from "redux-saga/effects";

import productSaga from "./product/sagas";

export function* rootSaga() {
  yield all([fork(productSaga)]);
}
