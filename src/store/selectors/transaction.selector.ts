import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../rootReducer";

const getAllTransactions = (state: AppState) => state.transaction.transactions;
export const getAllTransactionsSelector = createSelector(
  getAllTransactions,
  (error) => error,
);

const getTransactionById = (state: AppState) => state.transaction.transaction;
export const getTransactionByIdSelector = createSelector(
  getTransactionById,
  (error) => error,
);

const getTransactionLoading = (state: AppState) => state.transaction.loading;
export const selectTransactionLoading = createSelector(
  getTransactionLoading,
  (error) => error,
);

const getTransactionError = (state: AppState) => state.transaction.error;
export const getTransactionErrorSelector = createSelector(
  getTransactionError,
  (error) => error,
);
