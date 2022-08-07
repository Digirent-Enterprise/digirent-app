import { Column } from "react-table";
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
    accessor: (d: any) => {
      return d.rentalCost + d.deposit + d.latePenalty;
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
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Product ID",
    accessor: "productId",
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
