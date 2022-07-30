import { FETCH_USERS_ERROR } from "./action.types";

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  pw1: string;
  avatar: string;
}

export interface IUserDetail {
  role: string;
  isEmailVerified: boolean;
  id: string;
  name: string;
  email: string;
  phone: string;
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

export interface FetchUserErrorPayload {
  error: string;
}
export type FetchUserError = {
  type: typeof FETCH_USERS_ERROR;
  payload: FetchUserErrorPayload;
};

export type UserActions = FetchUserError | SetUser;
