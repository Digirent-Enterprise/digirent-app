import { Column } from "react-table";
import { ClickDelete, ClickEdit } from "../HandleActionClick";

export const UserColumns: Array<Column> = [
  {
    Header: "User",
    accessor: "name",
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
    accessor: () => (
      <div>
        <ClickEdit pageType="user" />
        <ClickDelete pageType="user" />
      </div>
    ),
  },
];
