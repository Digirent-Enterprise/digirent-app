import { SET_TRANSACTIONS, SET_TRANSACTION } from "../types/action.types";

import {
  TransactionActions,
  TransactionState,
} from "../types/transaction.types";

const initialState: TransactionState = {
  transaction: {
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
    productImageUrl: "",
  },
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
    case SET_TRANSACTION:
      return {
        ...state,
        pending: false,
        transaction: action.payload.transaction,
      };

    default:
      return state;
  }
};

export default TransactionReducer;
