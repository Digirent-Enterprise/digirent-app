import React from "react";
import ProductSummary from "../item/ProductSummary";

const ProductSummaryLayout = ({ productData }: any) => {
  return (
    <ProductSummary productName={productData.name} address="Ho Chi Minh city" />
  );
};

export default ProductSummaryLayout;
