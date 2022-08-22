import { Column } from "react-table";
import { Badge } from "@chakra-ui/react";

import { ClickDelete, ClickEdit } from "../HandleActionClick";

export const TransactionColumns: Array<Column> = [
  {
    Header: "Transaction ID",
    accessor: (e: any) => {
      return e._id.toUpperCase();
    },
  },
  {
    Header: "User Email",
    accessor: "userEmail",
  },
  {
    id: "total",
    Header: "Total Rental Cost",
    accessor: (d: any) => {
      return `${d.rentalCost + d.deposit + d.latePenalty} USD`;
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
    accessor: (d: any) => {
      return d.status === "paid" ? (
        <Badge colorScheme="green">Paid</Badge>
      ) : (
        <Badge colorScheme="yellow">Pending</Badge>
      );
    },
  },
  {
    Header: "Product ID",
    accessor: "productId._id",
  },
  {
    Header: "Action",
    accessor: () => (
      <div>
        <ClickEdit pageType="transaction" />
        <ClickDelete pageType="transaction" />
      </div>
    ),
  },
];
