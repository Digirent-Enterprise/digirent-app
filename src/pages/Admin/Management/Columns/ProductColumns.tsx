import { Column } from "react-table";
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
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: () => (
      <div>
        <ClickEdit pageType="product" />
        <ClickDelete pageType="product" />
      </div>
    ),
  },
];
