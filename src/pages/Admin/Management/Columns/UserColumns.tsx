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
    Header: "Created Date",
    accessor: "createdDate",
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
