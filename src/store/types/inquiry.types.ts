export interface IInquiry {
  _id: string;
  email: string;
  inquiryType: string;
  image: string;
  inquiryDescription: string;
  createdDate: Date;
}

export interface InquiryState {
  loading: boolean;
  inquiries?: IInquiry[];
  inquiry?: IInquiry;
  error: string | null;
}

export type InquiryAction = {
  type: string;
  payload: {
    inquiries?: IInquiry[];
  };
};
