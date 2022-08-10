import { all, fork } from "redux-saga/effects";

import productSaga from "./sagas/product.saga";
import userSaga from "./sagas/user.saga";
import transactionSaga from "./sagas/transaction.saga";
import appSaga from "./sagas/app.saga";

export function* rootSaga() {
  yield all([fork(productSaga), fork(userSaga), fork(transactionSaga), fork(appSaga)]);
}
