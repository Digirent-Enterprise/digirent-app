import { all, put, call, takeLatest } from "redux-saga/effects";
import { GET_APP_LOADING } from "../types/action.types";
import {getUserDetail} from "../actions/user.action";
import {getProducts} from "../actions/product.action";
import {setAppLoading} from "../actions/app.action";


function* getAppLoading(): any {
    try {
        yield put(getUserDetail());
        yield put(getProducts());
        yield put(setAppLoading(true));
    } catch (e: any) {
        yield setAppLoading(false);
    }
}

function* appSaga() {
    yield all([takeLatest(GET_APP_LOADING, getAppLoading)]);
}

export default appSaga;
