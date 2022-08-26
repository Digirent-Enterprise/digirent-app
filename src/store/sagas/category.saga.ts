import { all, call, put, delay, takeLatest } from "redux-saga/effects";
import { ICategory } from "../types/category.types";
import { customAxios } from "../../http-common";
import { API_BASE_URL } from "../../utils/constants/api.constants";
import { setCategories, setCategoryByID } from "../actions/category.action";
import { GET_CATEGORY, GET_CATEGORY_BY_ID } from "../types/action.types";

const fetchCategory = () =>
  customAxios().get<ICategory[]>(`${API_BASE_URL}/v1/api/category`);

const fetchCategorybyID = (queryName: string) => {
  return customAxios().get<ICategory[]>(
    `${API_BASE_URL}/v1/api/category/get-category-products?queryName=${queryName}`
  );
};

function* getCategory(): any {
  const response = yield call(fetchCategory);
  yield put(setCategories(response.data));
}

function* getCategoryByID(action: {
  type: string;
  payload: {
    queryName: string;
  };
}): any {
  const response = yield call(fetchCategorybyID, action.payload.queryName);
  yield put(setCategoryByID(response.data));
}

function* categorySaga() {
  yield all([
    takeLatest(GET_CATEGORY, getCategory),
    takeLatest(GET_CATEGORY_BY_ID, getCategoryByID),
  ]);
}

export default categorySaga;
