import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import { getAllProductsSelector } from "../../../store/selectors/product.selector";
import { getProducts } from "../../../store/actions/product.action";
import DefaultManagement from "./DefaultManagement";

import { ProductColumns } from "./Columns";

const ProductManagement = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const productFetchData = useSelector(getAllProductsSelector);

  useEffect(() => {
    dispatch(getProducts());
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
    { label: "Images", key: "images" },
  ];

  return (
    <DefaultManagement
      title={t("ProductManagement")}
      filename="Products.csv"
      headers={headers}
      columnProps={productColumns}
      dataProps={productData}
    />
  );
};

export default ProductManagement;
