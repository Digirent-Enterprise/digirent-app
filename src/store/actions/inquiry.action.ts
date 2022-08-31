import { SET_INQUIRIES, GET_INQUIRIES } from "../types/action.types";

export const setInquiries = (payload: any) => {
  return {
    type: SET_INQUIRIES,
    payload: {
      inquiries: payload,
      error: null,
    },
  };
};

export const getInquiries = () => {
  return {
    type: GET_INQUIRIES,
  };
};
