import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllProducts } from "../../../store/selectors/product.selector";
import { getProducts } from "../../../store/actions/product.action";
import { getCurrentUser } from "../../../store/selectors/user.selector";
import { getUserDetail } from "../../../store/actions/user.action";
import DefaultManagement from "./DefaultManagement";

import { ProductColumns } from "./Columns";

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
  return (
    <DefaultManagement
      title="Product Management"
      filename="Products.csv"
      columnProps={productColumns}
      dataProps={productData}
    />
  );
};

export default ProductManagement;
