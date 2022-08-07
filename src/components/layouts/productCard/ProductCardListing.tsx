import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";

import ProductListLayout from "./productListLayout/productListLayout";

import { getAllProducts } from "../../../store/selectors/product.selector";
import { getProducts } from "../../../store/actions/product.action";

const ProductsListing = () => {
  const dispatch = useDispatch();

  const productFetchData = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productData = useMemo(() => productFetchData, [productFetchData]);

  return <ProductListLayout products={productData} />;
};

export default ProductsListing;
