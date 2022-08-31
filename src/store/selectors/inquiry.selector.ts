import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../rootReducer";

const getAllInquiries = (state: AppState) => state.inquiry.inquiries;

export const getAllInquiriesSelector = createSelector(
  getAllInquiries,
  (error) => error,
);
