import { Badge } from "@chakra-ui/react";
import { Column } from "react-table";
import {
  ClickDelete,
  ClickEdit,
  ViewDetailModalAction,
} from "../HandleActionClick";

export const UserColumns: Array<Column> = [
  {
    Header: "User ID",
    accessor: "_id",
  },
  {
    Header: "User Name",
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
    accessor: "role",
    Cell: ({ row }: any) => {
      return row.values.role === "user" ? (
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

    accessor: "status",
    Cell: ({ row }: any) => {
      return row.values.status ? (
        <Badge colorScheme="green">Active</Badge>
      ) : (
        <Badge colorScheme="red">Deactivated</Badge>
      );
    },
  },
  {
    Header: "Action",
    Cell: ({ row }: any) => (
      <div>
        <ClickEdit pageType="user" rowData={row} />
        <ClickDelete pageType="user" rowData={row} />
      </div>
    ),
  },
  {
    Header: "View",
    Cell: ({ row }: any) => (
      <div>
        <ViewDetailModalAction rowData={row} pageType="user" />
      </div>
    ),
  },
];
