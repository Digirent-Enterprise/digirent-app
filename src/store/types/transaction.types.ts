import { FETCH_TRANSACTIONS_ERROR } from "./action.types";

export interface ITransaction {
  _id: string;
  productId: string;
  userEmail: string;
  rentalCost: number;
  deposit: number;
  status: string;
  latePenalty: number;
  currency: string;
  from: Date;
  to: Date;
  productImageUrl: string;
}

export interface TransactionState {
  transaction: ITransaction;
  pending: boolean;
  transactions: ITransaction[];
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

export interface FetchTransactionErrorPayload {
  error: string;
}
export type FetchTransactionError = {
  type: typeof FETCH_TRANSACTIONS_ERROR;
  payload: FetchTransactionErrorPayload;
};

export type TransactionActions = FetchTransactionError | SetTransaction;
