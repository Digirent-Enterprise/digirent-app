import { Column } from "react-table";

export const TransactionColumns: Array<Column> = [
  {
    Header: "Transaction ID",
    accessor: "transaction_id",
  },
  {
    Header: "User Name",
    accessor: "user_name",
  },
  {
    Header: "Total Rental Cost",
    accessor: "total_rental_cost",
  },
  {
    Header: "Borrowed Date",
    accessor: "borrowed_date",
  },
  {
    Header: "Return Date",
    accessor: "return_date",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Product Serial",
    accessor: "product_serial",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
