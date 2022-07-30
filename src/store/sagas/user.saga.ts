import axios from "axios";
import {customAxios} from "../../http-common";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { GET_USERS, GET_USER_DETAIL } from "../types/action.types";
import { IUser, IUserDetail } from "../types/user.types";
import {
  fetchUsersError,
  setUserDetail,
  setUsers,
} from "../actions/user.action";

import { API_BASE_URL } from "../../utils/constants/api.constants";

const fetchUsers = () => axios.get<IUser[]>(`${API_BASE_URL}/v1/api/user/`);
const fetchUserDetails = () => {
  console.log(`${API_BASE_URL}/v1/api/user/user-detail`);
  return customAxios().get<IUserDetail>(`${API_BASE_URL}/v1/api/user/user-detail`);
};

function* getUsers(): any {
  try {
    const response = yield call(fetchUsers);
    yield put(setUsers(response.data));
  } catch (e: any) {
    yield put(
      fetchUsersError({
        error: e.message,
      }),
    );
  }
}

function* getUserDetail(): any {
  try {
    const response = yield call(fetchUserDetails);
    yield put(setUserDetail(response.data));
  } catch (e: any) {
    yield put(
      fetchUsersError({
        error: e.message,
      }),
    );
  }
}

function* userSaga() {
  yield all([
    takeLatest(GET_USERS, getUsers),
    takeLatest(GET_USER_DETAIL, getUserDetail),
  ]);
}

export default userSaga;
