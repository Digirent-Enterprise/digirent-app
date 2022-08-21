import React from "react";
import ProductSummary from "../item/ProductSummary";

type ProductSummaryLayoutProps = {
  name: string
}
const ProductSummaryLayout = ({name} : ProductSummaryLayoutProps) => {
  return (
    <ProductSummary productName={name} address="Ho Chi Minh city" />
  );
};

export default ProductSummaryLayout;
