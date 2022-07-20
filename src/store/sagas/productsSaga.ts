import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IProduct } from "../types/productTypes";
import {
  fetchProductsAvailable,
  fetchProductsError,
  fetchProductsPending,
} from "../actions/productActions";
import { FETCH_PRODUCTS_REQUEST } from "../types/actionTypes";
import { baseURL } from "../../utils/api";

const getProducts = () => axios.get<IProduct[]>(`${baseURL}/admin/products)`);

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
