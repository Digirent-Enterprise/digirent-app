import { all, call, put, takeLatest } from "redux-saga/effects";
import { customAxios } from "../../http-common";
import { API_BASE_URL } from "../../utils/constants/api.constants";
import {
  fetchTransactionsError, setTransactionLoading,
  setTransactions,
} from "../actions/transaction.action";
import { GET_TRANSACTIONS } from "../types/action.types";
import { ITransaction } from "../types/transaction.types";

const fetchTransactions = () =>
  customAxios().get<ITransaction[]>(`${API_BASE_URL}/v1/api/transaction`);

function* getTransactions(): any {
  try {
    yield put(setTransactionLoading('loading'))
    const response = yield call(fetchTransactions);
    yield put(setTransactions(response.data));
    yield put(setTransactionLoading('success'))
  } catch (e: any) {
    yield put(setTransactionLoading('fail'))
    yield put(
      fetchTransactionsError({
        error: e.message,
      }),
    );
  }
}

function* transactionSaga() {
  yield all([takeLatest(GET_TRANSACTIONS, getTransactions)]);
}

export default transactionSaga;
