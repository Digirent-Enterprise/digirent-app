import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllProductsSelector } from "../../../store/selectors/product.selector";
import { getProducts } from "../../../store/actions/product.action";
import { getCurrentUserSelector } from "../../../store/selectors/user.selector";
import { getUserDetail } from "../../../store/actions/user.action";
import DefaultManagement from "./DefaultManagement";

import { ProductColumns } from "./Columns";

const ProductManagement = () => {
  const dispatch = useDispatch();

  const productFetchData = useSelector(getAllProductsSelector);
  const currentUser = useSelector(getCurrentUserSelector);

  useEffect(() => {
    dispatch(getUserDetail());
    dispatch(getProducts());
    console.log("currentUser", currentUser);
  }, []);

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
