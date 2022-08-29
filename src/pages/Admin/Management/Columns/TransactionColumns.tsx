import { Column } from "react-table";
import { Badge } from "@chakra-ui/react";

import { ClickDelete, ClickEdit } from "../HandleActionClick";

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
    id: "status",
    Header: "Status",
    accessor: (e: any) => {
      return e.status === "paid" ? (
        <Badge colorScheme="gray">Paid</Badge>
      ) : e.status === "shipped" ? (
        <Badge colorScheme="green">Shipped</Badge>
      ) : (
        <Badge colorScheme="yellow">Pending</Badge>
      );
    },
  },
  {
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
        <ClickDelete pageType="transaction" rowData={row} />
      </div>
    ),
  },
];
