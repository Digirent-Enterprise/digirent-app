import { FETCH_TRANSACTIONS_ERROR } from "./action.types";
import { IProduct } from "./product.types";

export interface ITransaction {
  _id?: string;
  productId: IProduct | string;
  userEmail: string;
  rentalCost: number;
  deposit: number;
  status: string;
  latePenalty: number;
  currency: string;
  from: Date;
  to: Date;
}

export type TransactionLoading = "" | "loading" | "success" | "fail";

export interface TransactionState {
  loading: TransactionLoading;
  transactions: ITransaction[];
  transaction: ITransaction;
  error: string | null;
}
export interface SetTransactionPayload {
  transactions: ITransaction[];
  transaction: ITransaction;
}

export type SetTransaction = {
  type: string;
  payload: SetTransactionPayload;
};

export type TransactionAction = {
  type: string;
  payload: {
    loading?: TransactionLoading;
    transactions?: ITransaction[];
    transaction?: ITransaction;
  };
};

export interface FetchTransactionErrorPayload {
  error: string;
}
export type FetchTransactionError = {
  type: typeof FETCH_TRANSACTIONS_ERROR;
  payload: FetchTransactionErrorPayload;
};

export type TransactionActions = TransactionAction;
