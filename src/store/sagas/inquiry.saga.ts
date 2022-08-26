import { all, call, delay, put, takeLatest } from "redux-saga/effects";

import { GET_INQUIRIES } from "../types/action.types";
import { API_BASE_URL } from "../../utils/constants/api.constants";
import { customAxios } from "../../http-common";
import { IInquiry } from "../types/inquiry.types";
import { setInquiries } from "../actions/inquiry.action";

const fetchInquiries = () =>
  customAxios().get<IInquiry[]>(`${API_BASE_URL}/v1/api/inquiry/inquiries`);

function* getInquiries(): any {
  const response = yield call(fetchInquiries);
  console.log("response", response);
  yield put(setInquiries(response.data));
  yield delay(1000);
}

function* inquirySaga() {
  yield all([takeLatest(GET_INQUIRIES, getInquiries)]);
}

export default inquirySaga;
