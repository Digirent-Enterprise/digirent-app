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
    accessor: (d: any) => {
      return d.status ? (
        <Badge colorScheme="green">Available</Badge>
      ) : (
        <Badge colorScheme="yellow">Pending</Badge>
      );
    },
  },
  {
    id: "action",
    Header: "Action",
    accessor: () => (
      <div className="flex pr-6 space-x-3">
        <ClickEdit pageType="product" />
        <ClickDelete pageType="product" />
      </div>
    ),
  },
];
