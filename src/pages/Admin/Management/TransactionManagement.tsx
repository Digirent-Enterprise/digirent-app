import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllTransactions } from "../../../store/selectors/transaction.selector";
import { getTransactions } from "../../../store/actions/transaction.action";
import DefaultManagement from "./DefaultManagement";

import { TransactionColumns } from "./Columns";

const TransactionManagement = () => {
  const dispatch = useDispatch();

  const transactionFetchData = useSelector(getAllTransactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  const transactionColumns = useMemo(() => TransactionColumns, []);
  const transactionData = useMemo(
    () => transactionFetchData,
    [transactionFetchData],
  );

  const headers = [
    { label: "Transaction ID", key: "_id" },
    { label: "User email", key: "userEmail" },
    { label: "Borrowed Date", key: "from" },
    { label: "Return Date", key: "to" },
    { label: "Product ID", key: "productId" },
    { label: "Status", key: "status" },
  ];

  return (
    <DefaultManagement
      title="Transaction Management"
      filename="Transactions.csv"
      headers={headers}
      columnProps={transactionColumns}
      dataProps={transactionData}
    />
  );
};

export default TransactionManagement;
