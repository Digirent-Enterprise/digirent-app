import axios from "axios";
import { SET_UNAUTHENTICATED } from "../types/user.types";

interface UserProps {
  name: string;
  email: string;
  pw1: string;
  pw2: string;
  phone: string;
}

export const signInAction = async (method: any, { email, pw1 }: UserProps) => {
  const res = await method({ variables: { email, pw1 } });
  const { token } = res.data.signIn;
  return token;
};

export const registerAction = async (
  method: any,
  { name, pw1, pw2, email, phone }: UserProps,
) => {
  const res = await method({
    variables: { name, pw1, pw2, email, phone },
  });
  const { token } = res.data.register;
  return token;
};

const setAuthorizationHeader = (token: string) => {
  const UserToken = `Bearer ${token}`;
  localStorage.setItem("UserToken", UserToken);
  axios.defaults.headers.common.Authorization = UserToken;
};

export const loginUser =
  (method: any, userData: UserProps, history: string[]) => async () => {
    const token = await signInAction(method, userData);
    setAuthorizationHeader(token);
    history.push("/");
  };

export const registerUser =
  (method: any, userData: UserProps, history: string[]) => async () => {
    const token = await registerAction(method, userData);
    setAuthorizationHeader(token);
    history.push("/");
  };

export const logoutUser =
  () => (dispatch: (arg0: { type: string }) => void) => {
    localStorage.removeItem("UserToken");
    delete axios.defaults.headers.common.Authorization;
    dispatch({ type: SET_UNAUTHENTICATED });
  };
