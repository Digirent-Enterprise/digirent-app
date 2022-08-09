import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect, useMemo } from "react";

import ProductListLayout from "./ProductListLayout/ProductListLayout";

import { getAllProducts } from "../../../store/selectors/product.selector";
import { getProducts } from "../../../store/actions/product.action";
import { Spinner } from "../../elements";

const ProductsListing = () => {
  const dispatch = useDispatch();

  const productFetchData = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productData = useMemo(() => productFetchData, [productFetchData]);

  return (
    <Suspense fallback={<Spinner />}>
      <ProductListLayout products={productData} />
    </Suspense>
  );
};

export default ProductsListing;
