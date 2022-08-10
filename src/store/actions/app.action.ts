import {GET_APP_LOADING, SET_APP_LOADING} from "../types/action.types";

//payload actions
export const setAppLoading = (state: boolean) => {
    return {
        type: SET_APP_LOADING,
        payload: {loading: state}
    }
}

//saga actions
export const getAppLoading = () => {
    return {
        type: GET_APP_LOADING
    }
}
