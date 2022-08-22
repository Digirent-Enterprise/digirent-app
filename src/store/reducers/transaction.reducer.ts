import {SET_TRANSACTION_LOADING, SET_TRANSACTIONS} from "../types/action.types";

import {
  TransactionActions,
  TransactionState,
} from "../types/transaction.types";

const initialState: TransactionState = {
  loading: '',
  transactions: [],
  error: null,
};

const TransactionReducer = (
  state = initialState,
  action: TransactionActions,
) => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload.transactions!,
      };
    case SET_TRANSACTION_LOADING:
      return {
        ...state,
        loading: action.payload.loading!
      }
    default:
      return state;
  }
};

export default TransactionReducer;
