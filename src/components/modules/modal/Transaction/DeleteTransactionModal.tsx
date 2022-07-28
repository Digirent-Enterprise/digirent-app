import React from "react";
import RootDeleteModal from "../RootDeleteModal";
import { TransactionModalProps } from "./transactions.type";

const DeleteTransactionModal = (props: TransactionModalProps) => {
  return (
    <RootDeleteModal {...props}>
      <h1 className="my-5 text-lg font-bold">Delete Transaction</h1>
      <h3 className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">
        Are you sure you want to delete this transaction? This action cannot be
        undone
      </h3>
    </RootDeleteModal>
  );
};
export default DeleteTransactionModal;
