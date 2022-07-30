import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../rootReducer";

export const getAllUsers = (state: AppState) => state.user.users;

const getUserError = (state: AppState) => state.user.error;

export const getUserErrorSelector = createSelector(
  getUserError,
  (error) => error,
);
