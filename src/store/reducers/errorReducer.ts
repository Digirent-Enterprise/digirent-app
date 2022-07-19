interface ErrorAction {
  type: string;
  error: Error | string;
}

export interface ErrorState {
  [key: string]: null | Error | string;
}

const errorReducer = (state: ErrorState = {}, action: ErrorAction) => {
  const { type, error } = action;
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

  // not a *_REQUEST / *_FAILURE actions, so ignore them
  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === "FAILURE" ? error : null,
  };
};

export default errorReducer;
