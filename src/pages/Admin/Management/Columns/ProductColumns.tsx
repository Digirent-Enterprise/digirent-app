import { Column } from "react-table";
import { Badge } from "@chakra-ui/react";

import { ClickDelete, ClickEdit } from "../HandleActionClick";

export const ProductColumns: Array<Column> = [
  {
    Header: "Product ID",
    accessor: "_id",
  },
  {
    Header: "Product Name",
    accessor: "name",
  },
  {
    Header: "Product Serial",
    accessor: "serial",
  },
  {
    Header: "Brand",
    accessor: "brand",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Description",
    accessor: "description",
  },
  {
    id: "status",
    Header: "Status",
    accessor: (e: any) => {
      return e.status ? (
        <Badge colorScheme="green">Available</Badge>
      ) : (
        <Badge colorScheme="yellow">Pending</Badge>
      );
    },
  },
  {
    Header: "Action",
    Cell: ({ row }: any) => (
      <div>
        <ClickEdit pageType="product" rowData={row} />
        <ClickDelete pageType="product" rowData={row} />
      </div>
    ),
  },
];
