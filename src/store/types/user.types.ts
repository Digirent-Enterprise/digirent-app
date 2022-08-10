import { FETCH_USERS_ERROR } from "./action.types";

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  avatar: string;
}

export interface IUserDetail {
  role: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface UserState {
  pending: boolean;
  users: IUser[];
  error: string | null;
}

export interface CurrentUserState extends IUserDetail {}
export interface SetUserPayload {
  users: IUser[];
}

export type SetUser = {
  type: string;
  payload: SetUserPayload;
};

export type SaveUserInfo = {
  type: string;
  value: IUser;
};

export interface FetchUserErrorPayload {
  error: string;
}
export type FetchUserError = {
  type: typeof FETCH_USERS_ERROR;
  payload: FetchUserErrorPayload;
};

export type UserActions = FetchUserError | SetUser;

export type SaveUserAction = SaveUserInfo;
