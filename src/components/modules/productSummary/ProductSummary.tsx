import React from "react";

interface ProductSumaryProps {
  productName: string;
  Address: string;
}
const ProductSummary: React.FC<ProductSumaryProps> = ({
  productName,
  Address,
}) => {
  return (
    <div className="w-full flex ml-52">
      <div className="w-3/5 flex flex-col">
        <div className={` text-3xl font-extrabold`}>{productName}</div>
        <div className="underline text-xl">{Address}</div>
      </div>
    </div>
  );
};

export default ProductSummary;
