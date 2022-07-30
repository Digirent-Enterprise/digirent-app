import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IUser } from "../types/user.types";
import { fetchUsersError, setUsers } from "../actions/user.action";
import { GET_USERS } from "../types/action.types";
import { API_BASE_URL } from "../../utils/constants/api.constants";

const fetchUsers = () => axios.get<IUser[]>(`${API_BASE_URL}/v1/api/user/)`);

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

function* userSaga() {
  yield all([takeLatest(GET_USERS, getUsers)]);
}

export default userSaga;
