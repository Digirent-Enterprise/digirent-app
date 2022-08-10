import {SET_APP_LOADING} from "../types/action.types";
import {IAppState} from "../types/app.types";

const initialState: IAppState = {
    loading: false
};

const AppReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_APP_LOADING:
            return {...state, loading: action.payload.loading}
        default:
            return state;
    }
};

export default AppReducer;
