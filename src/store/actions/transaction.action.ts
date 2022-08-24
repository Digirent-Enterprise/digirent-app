import {
  GET_TRANSACTION,
  FETCH_TRANSACTIONS_ERROR,
  GET_TRANSACTIONS,
  SET_TRANSACTION_LOADING,
  SET_TRANSACTION,
  SET_TRANSACTIONS,
  SET_TRANSACTION_BY_ID,
  GET_TRANSACTION_BY_ID,
} from "../types/action.types";
import {
  FetchTransactionError,
  FetchTransactionErrorPayload,
  ITransaction,
  TransactionLoading,
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

export const setTransactionByID = (payload: ITransaction) => {
  return {
    type: SET_TRANSACTION_BY_ID,
    payload: {
      transaction: payload,
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

export const getTransactionByID = (_id: string) => {
  return {
    type: GET_TRANSACTION_BY_ID,
    payload: {
      _id,
    },
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
      loading,
    },
  };
};
