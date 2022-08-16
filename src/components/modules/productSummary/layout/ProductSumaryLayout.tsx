import ProductSummary from "../item/ProductSummary";

const ProductSumaryLayout = ({ productData }: any) => {
  return (
    <div>
      <ProductSummary
        productName={productData.name}
        Address="this is an addess"
      />
    </div>
  );
};

export default ProductSumaryLayout;
