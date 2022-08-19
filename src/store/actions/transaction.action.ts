import {
  GET_TRANSACTION,
  FETCH_TRANSACTIONS_ERROR,
  GET_TRANSACTIONS,
  SET_TRANSACTION,
  SET_TRANSACTIONS,
} from "../types/action.types";
import {
  FetchTransactionError,
  FetchTransactionErrorPayload,
  ITransaction,
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

export const setTransaction = (payload: ITransaction) => {
  return {
    type: SET_TRANSACTION,
    payload: {
      transaction: payload,
      error: null,
    },
  };
};

export const getTransaction = () => {
  return {
    type: GET_TRANSACTION,
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
