import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IProduct } from "../types/product.types";
import {
  fetchProductsAvailable,
  fetchProductsError,
  fetchProductsPending,
} from "../actions/product.action";
import { FETCH_PRODUCTS_REQUEST } from "../types/action.types";
import { API_BASE_URL } from "../../utils/constants/api.constants";

const getProducts = () =>
  axios.get<IProduct[]>(`${API_BASE_URL}/admin/products)`);

function* fetchProductAvailableSaga(): any {
  try {
    const response = yield call(getProducts);
    yield put(
      fetchProductsAvailable({
        products: response.data,
        status: "available",
      }),
    );
  } catch (e: any) {
    yield put(
      fetchProductsError({
        error: e.message,
      }),
    );
  }
}

function* fetchProductPendingSaga(): any {
  try {
    const response = yield call(getProducts);
    yield put(
      fetchProductsPending({
        products: response.data,
        status: "pending",
      }),
    );
  } catch (e: any) {
    yield put(
      fetchProductsError({
        error: e.message,
      }),
    );
  }
}

function* productSaga() {
  yield all([
    takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductAvailableSaga),
    takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductPendingSaga),
  ]);
}

export default productSaga;
