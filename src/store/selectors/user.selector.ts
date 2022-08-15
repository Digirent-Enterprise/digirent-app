import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../rootReducer";

const getAllUsers = (state: AppState) => state.user.users;

export const getAllUsersSelector = createSelector(
  getAllUsers,
  (error) => error,
);

const getCurrentUser = (state: AppState) => state.currentUser;

export const getCurrentUserSelector = createSelector(
  getCurrentUser,
  (error) => error,
);

const getUserError = (state: AppState) => state.user.error;

export const getUserErrorSelector = createSelector(
  getUserError,
  (error) => error,
);

export const getEmailFromState = (state: AppState) => state.saveUser.email;
