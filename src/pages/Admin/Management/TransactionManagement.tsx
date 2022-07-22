import React, { useMemo } from "react";

import DefaultManagementLayout from "../DefaultManagementLayout";

function TransactionManagement() {
  const columnsHeader = useMemo(
    () => [
      {
        id: 1,
        header: "Transaction ID",
      },
      {
        id: 2,
        header: "User Name",
      },
      {
        id: 3,
        header: "Total Rental Cost",
      },
      {
        id: 4,
        header: "Borrowed Date",
      },
      {
        id: 5,
        header: "Return Date",
      },
      {
        id: 6,
        header: "Status",
      },
      {
        id: 7,
        header: "Product Serial",
      },
      {
        id: 8,
        header: "Action",
      },
    ],
    [],
  );
  return (
    <DefaultManagementLayout
      title="Transaction Management"
      columnsHeader={columnsHeader}
      pageType="transaction"
    />
  );
}

export default TransactionManagement;
