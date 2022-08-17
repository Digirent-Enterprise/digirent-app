export type AppLoading = boolean;
export type AppAuth = 'guest' | 'user'  | 'admin';

export interface IAppState {
    loading: AppLoading
    auth: AppAuth
}
