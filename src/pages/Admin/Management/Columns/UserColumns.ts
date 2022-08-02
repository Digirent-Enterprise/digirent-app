import { Column } from "react-table";

export const UserColumns: Array<Column> = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Location",
    accessor: "location",
  },
  {
    Header: "Created Time",
    accessor: "created_time",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
