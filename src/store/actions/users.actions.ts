import baseURL from "../../utils/api/api";

export const fetchUser = (id: any) => {
  return async (dispatch: any) => {
    const response = await baseURL.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};
