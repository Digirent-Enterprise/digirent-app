import { all, call, put } from "redux-saga/effects";
import * as Eff from "redux-saga/effects";
import { ICategory } from "../types/category.types";
import { customAxios } from "../../http-common";
import { API_BASE_URL } from "../../utils/constants/api.constants";
import { setCategories, setCategoryByID } from "../actions/category.action";
import { GET_CATEGORY, GET_CATEGORY_BY_ID } from "../types/action.types";

const TakeLatest: any = Eff.takeLatest;

const fetchCategory = () =>
  customAxios().get<ICategory[]>(`${API_BASE_URL}/v1/api/category`);

const fetchCategorybyID = (name:string) => {
  return customAxios().get<ICategory>(`${API_BASE_URL}/v1/api/category/${name}`)
};
function* getCategory(): any {
  const response = yield call(fetchCategory);
  yield put(setCategories(response.data));
}

function* getCategoryByID(payload: ICategory): any {
  const response = yield call(fetchCategorybyID, payload.name);
  console.log("herehere", response.data)
  yield put(setCategoryByID(response.data));
}

function* categorySaga() {
  yield all([TakeLatest(GET_CATEGORY, getCategory), TakeLatest(GET_CATEGORY_BY_ID, getCategoryByID)]);
}

export default categorySaga;
