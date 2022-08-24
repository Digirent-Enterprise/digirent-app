import { all, call, put, takeLatest } from "redux-saga/effects";
import { IProduct } from "../types/product.types";
import {
  fetchProductsError,
  setProductByID,
  setProducts,
  fetchProductByIDError,
} from "../actions/product.action";
import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from "../types/action.types";
import { API_BASE_URL } from "../../utils/constants/api.constants";
import { customAxios } from "../../http-common";

const fetchProducts = () =>
  customAxios().get<IProduct[]>(`${API_BASE_URL}/v1/api/product`);

const fetchProductByID = (_id: string) => {
  return customAxios().get<IProduct>(`${API_BASE_URL}/v1/api/product/${_id}`);
};
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

function* getProductByID(action: {
  type: string;
  payload: { _id: string };
}): any {
  try {
    const response = yield call(fetchProductByID, action.payload._id);
    yield put(setProductByID(response.data));
  } catch (e: any) {
    yield put(
      fetchProductByIDError({
        error: e.message,
      }),
    );
  }
}

function* productSaga() {
  yield all([
    takeLatest(GET_PRODUCTS, getProducts),
    takeLatest(GET_PRODUCT_BY_ID, getProductByID),
  ]);
}

export default productSaga;
