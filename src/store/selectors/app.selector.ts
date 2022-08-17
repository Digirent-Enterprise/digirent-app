import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../rootReducer";

const getAppLoading = (state: AppState) => state.app.loading;

const getAppAuth = (state: AppState) => state.app.auth;

export const selectAppLoading = createSelector(getAppLoading, (error) => error);

export const selectAppAuth = createSelector(getAppAuth, (error) => error);
