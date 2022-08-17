import React from "react";

interface ProductSummaryProps {
  productName: string;
  address: string;
}
const ProductSummary: React.FC<ProductSummaryProps> = ({
  productName,
  address,
}) => {
  return (
    <div className="flex lg:ml-40 lg:mt-20">
      <div className="flex flex-col w-3/5">
        <div className="text-3xl font-extrabold">{productName}</div>
        <div className="text-xl text-[#6B7280] my-5 underline">{address}</div>
      </div>
    </div>
  );
};

export default ProductSummary;
