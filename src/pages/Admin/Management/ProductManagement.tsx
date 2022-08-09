import React, { useMemo, useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllProducts } from "../../../store/selectors/product.selector";
import { getProducts } from "../../../store/actions/product.action";
import { getCurrentUser } from "../../../store/selectors/user.selector";
import { getUserDetail } from "../../../store/actions/user.action";
import DefaultManagement from "./DefaultManagement";

import { ProductColumns } from "./Columns";
import { Spinner } from "../../../components";

const ProductManagement = () => {
  const dispatch = useDispatch();

  const productFetchData = useSelector(getAllProducts);
  const currentUser = useSelector(getCurrentUser);

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
    <Suspense fallback={<Spinner />}>
      <DefaultManagement
        title="Product Management"
        filename="Products.csv"
        headers={headers}
        columnProps={productColumns}
        dataProps={productData}
      />
    </Suspense>
  );
};

export default ProductManagement;
