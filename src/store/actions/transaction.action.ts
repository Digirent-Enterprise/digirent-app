import {
  FETCH_TRANSACTIONS_ERROR,
  GET_TRANSACTIONS, SET_TRANSACTION_LOADING,
  SET_TRANSACTIONS,
} from "../types/action.types";
import {
  FetchTransactionError,
  FetchTransactionErrorPayload,
  ITransaction, TransactionLoading,
} from "../types/transaction.types";

export const setTransactions = (payload: ITransaction[]) => {
  return {
    type: SET_TRANSACTIONS,
    payload: {
      transactions: payload,
      error: null,
    },
  };
};

export const getTransactions = () => {
  return {
    type: GET_TRANSACTIONS,
  };
};

export const fetchTransactionsError = (
  payload: FetchTransactionErrorPayload,
): FetchTransactionError => ({
  type: FETCH_TRANSACTIONS_ERROR,
  payload,
});

export const setTransactionLoading = (loading: TransactionLoading) => {
  return {
    type: SET_TRANSACTION_LOADING,
    payload: {
      loading
    }
  }
}
