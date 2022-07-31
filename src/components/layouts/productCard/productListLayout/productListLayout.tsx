import React from "react";
import { Products } from "../interface/interface";
import ProductCardListing from "../Item/productCardListing";

interface Props {
  products: Products[];
}

const ProductListLayout: React.FC<Props> = (props) => {
  const { products } = props;
  return (
    <div className="grid grid-cols-3">
      {products.map((product: Products) => {
        return (
          <ProductCardListing
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default ProductListLayout;
