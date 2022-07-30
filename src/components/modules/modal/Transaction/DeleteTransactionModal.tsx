import React from "react";
import RootDeleteModal from "../RootDeleteModal";
import { TransactionModalProps } from "./transactions.type";

const DeleteTransactionModal = (props: TransactionModalProps) => {
  return (
    <RootDeleteModal {...props}>
      <h1 className="my-5 text-4xl text-red">Delete Transaction</h1>
      <h3 className="mt-5 text-lg font-normal decoration-current">
        Are you sure you want to delete this transaction?
      </h3>
      <h3 className="text-lg font-normal decoration-current">
        This action cannot be undone
      </h3>
    </RootDeleteModal>
  );
};
export default DeleteTransactionModal;
