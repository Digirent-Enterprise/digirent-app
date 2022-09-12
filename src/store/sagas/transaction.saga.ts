import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  GET_TRANSACTION_BY_ID,
  GET_TRANSACTIONS,
  GET_TRANSACTION_BY_USER_EMAIL,
} from "../types/action.types";
import { customAxios } from "../../http-common";
import { API_BASE_URL } from "../../utils/constants/api.constants";
import {
  fetchTransactionsError,
  setTransactionByID,
  setTransactionByUserEmail,
  setTransactionLoading,
  setTransactions,
} from "../actions/transaction.action";

import { ITransaction } from "../types/transaction.types";

const fetchTransactions = () =>
  customAxios().get<ITransaction[]>(`${API_BASE_URL}/v1/api/transaction`);

const fetchTransactionByUserEmail = () =>
  customAxios().get<ITransaction[]>(
    `${API_BASE_URL}/v1/api/transaction/user-transaction`,
  );

const fetchTransactionById = (_id: string) =>
  customAxios().get<ITransaction>(
    `${API_BASE_URL}/v1/api/transaction/transaction-detail?id=${_id}`,
  );

function* getTransactions(): any {
  try {
    yield put(setTransactionLoading("loading"));
    const response = yield call(fetchTransactions);
    yield put(setTransactions(response.data));
    yield put(setTransactionLoading("success"));
  } catch (e: any) {
    yield put(setTransactionLoading("fail"));
    yield put(
      fetchTransactionsError({
        error: e.message,
      }),
    );
  }
}

function* getTransactionByUserEmail(): any {
  try {
    const response = yield call(fetchTransactionByUserEmail);
    yield put(setTransactionByUserEmail(response.data.reverse()));
  } catch (e: any) {
    yield put(
      fetchTransactionsError({
        error: e.message,
      }),
    );
  }
}

function* getTransactionById(action: {
  type: string;
  payload: { _id: string };
}): any {
  try {
    const response = yield call(fetchTransactionById, action.payload._id);
    yield put(setTransactionByID(response.data));
  } catch (e: any) {
    yield put(
      fetchTransactionsError({
        error: e.message,
      }),
    );
  }
}

function* transactionSaga() {
  yield all([
    takeLatest(GET_TRANSACTIONS, getTransactions),
    takeLatest(GET_TRANSACTION_BY_USER_EMAIL, getTransactionByUserEmail),
    takeLatest(GET_TRANSACTION_BY_ID, getTransactionById),
  ]);
}

export default transactionSaga;
