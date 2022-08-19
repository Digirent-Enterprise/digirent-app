import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../rootReducer";

const getAllTransactions = (state: AppState) => state.transaction.transactions;
const getTransaction = (state: AppState) => state.transaction.transaction;

export const getAllTransactionsSelector = createSelector(
  getAllTransactions,
  (error) => error,
);

export const getTransactionSelector = createSelector(
  getTransaction,
  (error) => error,
);

export const getTransactionError = (state: AppState) => state.transaction.error;

export const getTransactionErrorSelector = createSelector(
  getTransactionError,
  (error) => error,
);
