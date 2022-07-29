import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IProduct } from "../types/product.types";
import {
  fetchProductsAvailable,
  fetchProductsError,
  fetchProductsPending, setProducts,
} from "../actions/product.action";
import {FETCH_PRODUCTS_REQUEST, GET_PRODUCTS} from "../types/action.types";
import { API_BASE_URL } from "../../utils/constants/api.constants";

const fetchProducts = () => {
  return axios.get<IProduct[]>(`${API_BASE_URL}/v1/api/product/`);
}
function* fetchProductAvailableSaga(): any {
  try {
    const response = yield call(fetchProducts);
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
    const response = yield call(fetchProducts);
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

function* getProducts(): any {
  try {
    const response = yield call(fetchProducts);
    yield put(setProducts(response.data));

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
    takeLatest(GET_PRODUCTS, getProducts)
  ]);
}

export default productSaga;
