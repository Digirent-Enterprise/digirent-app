import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { getAllProducts } from "../../../store/selectors/product.selector";
import DefaultManagement from "./DefaultManagement";

import { ProductColumns } from "./Columns";

const ProductManagement = () => {
  const productFetchData = useSelector(getAllProducts);


  const productColumns = useMemo(() => ProductColumns, []);
  const productData = useMemo(() => productFetchData, [productFetchData]);

  const headers = [
    { label: "Product ID", key: "_id" },
    { label: "Product Name", key: "name" },
    { label: "Product Serial", key: "serial" },
    { label: "Brand", key: "brand" },
    { label: "Category", key: "category" },
    { label: "Description", key: "description" },
    { label: "Status", key: "status" },
  ];

  return (
    <DefaultManagement
      title="Product Management"
      filename="Products.csv"
      headers={headers}
      columnProps={productColumns}
      dataProps={productData}
    />
  );
};

export default ProductManagement;
