
import { AppState } from "../rootReducer";

export const selectAppLoading = (state: AppState) => state.app!.loading;

