import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../rootReducer";

export const getAllUsers = (state: AppState) => state.user.users;

export const getCurrentUser = (state: AppState) => state.currentUser;

const getUserError = (state: AppState) => state.user.error;

export const getUserErrorSelector = createSelector(
  getUserError,
  (error) => error,
);
