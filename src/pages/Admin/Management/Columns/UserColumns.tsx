import { Badge } from "@chakra-ui/react";
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
    id: "role",
    Header: "Role",
    accessor: (e: any) => {
      return e.role === "user" ? (
        <Badge colorScheme="green">User</Badge>
      ) : (
        <Badge colorScheme="yellow">Admin</Badge>
      );
    },
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
    id: "status",
    Header: "Status",
    accessor: (e: any) => {
      return e.status ? (
        <Badge colorScheme="green">Active</Badge>
      ) : (
        <Badge colorScheme="red">Deactivate</Badge>
      );
    },
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
