import React from "react";

import ProductSummaryLayout from "./layout/ProductSummaryLayout";

type ProductSummaryProps = {
  name: string
}
const ProductSummaryDisplay = ({ name }: ProductSummaryProps) => {
  return <ProductSummaryLayout name={name} />;
};

export default ProductSummaryDisplay;
