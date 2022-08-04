import { all, call, put, takeLatest } from "redux-saga/effects";
import { IProduct } from "../types/product.types";
import { fetchProductsError, setProducts } from "../actions/product.action";
import { GET_PRODUCTS } from "../types/action.types";
import { API_BASE_URL } from "../../utils/constants/api.constants";
import { customAxios } from "../../http-common";

const fetchProducts = () =>
  customAxios().get<IProduct[]>(`${API_BASE_URL}/v1/api/product`);

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
  yield all([takeLatest(GET_PRODUCTS, getProducts)]);
}

export default productSaga;
