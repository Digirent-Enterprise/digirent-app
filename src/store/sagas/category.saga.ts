import { all, call, put, takeLatest } from "redux-saga/effects";
import { ICategory } from "../types/category.types";
import { customAxios } from "../../http-common";
import { API_BASE_URL } from "../../utils/constants/api.constants";
import { setCategories } from "../actions/category.action";
import { GET_CATEGORY } from "../types/action.types";

const fetchCategory = () =>
  customAxios().get<ICategory[]>(`${API_BASE_URL}/v1/api/category`);

function* getCategory(): any {
  const response = yield call(fetchCategory);
  yield put(setCategories(response.data));
}

function* categorySaga() {
  yield all([takeLatest(GET_CATEGORY, getCategory)]);
}

export default categorySaga;
