import {all, put, takeLatest} from "redux-saga/effects";
import { INIT_APP } from "../types/action.types";
import {getUserDetail} from "../actions/user.action";
import {getProducts} from "../actions/product.action";
import {toast} from "react-toastify";
import {setAppLoading} from "../actions/app.action";
;

function* initApp() {
    try {
        yield put(getUserDetail());
        yield put(getProducts());
        yield put(setAppLoading(true));
    } catch (e) {
        toast.error("Error when init app");
    }
}

function* appSaga() {
    yield  all([takeLatest(INIT_APP, initApp)]);
}

export default appSaga;
