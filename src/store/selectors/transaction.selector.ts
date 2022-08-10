import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../rootReducer";

export const getAllTransactions = (state: AppState) =>
  state.transaction.transactions;

export const getTransactionError = (state: AppState) => state.transaction.error;

export const getTransactionErrorSelector = createSelector(
  getTransactionError,
  (error) => error,
);
