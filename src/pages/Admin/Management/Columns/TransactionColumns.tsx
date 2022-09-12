import { Column } from "react-table";
import { Badge } from "@chakra-ui/react";

import { ClickEdit } from "../HandleActionClick";

export const TransactionColumns: Array<Column> = [
  {
    Header: "Transaction ID",
    accessor: "_id",
  },
  {
    Header: "User Email",
    accessor: "userEmail",
  },
  {
    id: "total",
    Header: "Total Rental Cost",
    accessor: (e: any) => {
      return `${e.rentalCost + e.deposit + e.latePenalty} USD`;
    },
  },
  {
    Header: "Borrowed Date",
    accessor: "from",
  },
  {
    Header: "Return Date",
    accessor: "to",
  },
  {
    Header: "Intent",
    accessor: "intent",
  },
  {
    id: "status",
    Header: "Status",
    accessor: "status",
    Cell: ({ row }: any) => {
      return row.values.status === "paid" ? (
        <Badge colorScheme="gray">Paid</Badge>
      ) : row.values.status === "shipped" ? (
        <Badge colorScheme="green">Shipped</Badge>
      ) : (
        <Badge colorScheme="yellow">Pending</Badge>
      );
    },
  },
  {
    id: "productId",
    Header: "Product ID",
    accessor: (e: any) => {
      return e.productId._id;
    },
  },
  {
    Header: "Action",
    Cell: ({ row }: any) => (
      <div>
        <ClickEdit pageType="transaction" rowData={row} />
      </div>
    ),
  },
];
