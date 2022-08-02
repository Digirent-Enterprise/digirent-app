import { Column } from "react-table";

export const ProductColumns: Array<Column> = [
  {
    Header: "Product ID",
    accessor: "product_id",
  },
  {
    Header: "Product Name",
    accessor: "product_name",
  },
  {
    Header: "Product Serial",
    accessor: "product_serial",
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
    accessor: "action",
  },
];
