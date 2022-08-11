import { SET_TRANSACTIONS } from "../types/action.types";

import {
  TransactionActions,
  TransactionState,
} from "../types/transaction.types";

const initialState: TransactionState = {
  pending: false,
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
        pending: false,
        transactions: action.payload.transactions,
      };
    default:
      return state;
  }
};

export default TransactionReducer;
