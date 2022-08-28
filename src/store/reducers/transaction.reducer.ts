import {
  SET_TRANSACTION_LOADING,
  SET_TRANSACTIONS,
  SET_TRANSACTION_BY_ID,
  SET_TRANSACTION,
  SET_TRANSACTION_BY_USER_EMAIL,
} from "../types/action.types";

import {
  TransactionActions,
  TransactionState,
} from "../types/transaction.types";

export const initialTransaction = {
  _id: "",
  productId: "",
  userEmail: "",
  rentalCost: 0,
  deposit: 0,
  status: "",
  latePenalty: 0,
  currency: "",
  from: new Date(),
  to: new Date(),
};

const initialState: TransactionState = {
  transaction: initialTransaction,
  loading: "",
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
    case SET_TRANSACTION_BY_ID:
      return {
        ...state,
        transaction: action.payload.transaction!,
      };
    case SET_TRANSACTION_BY_USER_EMAIL:
      return {
        ...state,
        transactions: action.payload.transactions!,
      };
    case SET_TRANSACTION_LOADING:
      return {
        ...state,
        loading: action.payload.loading!,
      };
    case SET_TRANSACTION:
      return {
        ...state,
        transaction: action.payload.transaction!,
      };

    default:
      return state;
  }
};

export default TransactionReducer;
