import { Column } from "react-table";
import { Badge } from "@chakra-ui/react";

import {
  ClickDelete,
  ClickEdit,
  ViewDetailModalAction,
} from "../HandleActionClick";

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
    Header: "Images",
    accessor: "images",
    Cell: ({ row }: any) =>
      row.original?.images && (
        <img src={row.original?.images[0]} width="80vw" alt="product" />
      ),
  },

  {
    id: "status",
    Header: "Status",
    accessor: "status",

    Cell: ({ row }: any) => {
      return row.values.status ? (
        <Badge colorScheme="green">Available</Badge>
      ) : (
        <Badge colorScheme="yellow">Unavailable</Badge>
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
  {
    Header: "View",
    Cell: ({ row }: any) => (
      <ViewDetailModalAction pageType="product" rowData={row} />
    ),
  },
];
