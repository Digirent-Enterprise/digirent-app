import { SET_INQUIRIES } from "../types/action.types";
import { InquiryState, InquiryAction } from "../types/inquiry.types";

const initialInquiry = {
  _id: "",
  inquiryType: "",
  email: "",
  image: "",
  inquiryDescription: "",
  createdDate: new Date(),
};

const initialState: InquiryState = {
  inquiry: initialInquiry,
  inquiries: [],
  loading: false,
  error: null,
};

const InquiryReducer = (state = initialState, action: InquiryAction) => {
  switch (action.type) {
    case SET_INQUIRIES:
      return {
        ...state,
        loading: false,
        inquiries: action.payload.inquiries!,
      };
    default:
      return state;
  }
};

export default InquiryReducer;
