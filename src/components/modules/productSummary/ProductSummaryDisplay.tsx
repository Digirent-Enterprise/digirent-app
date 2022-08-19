import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../../store/actions/product.action";
import { getProductByIdSelector } from "../../../store/selectors/product.selector";
import ProductSummaryLayout from "./layout/ProductSummaryLayout";

const ProductSummaryDisplay = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productByIDFetchData = useSelector(getProductByIdSelector);
  useEffect(() => {
    if (id) {
      dispatch(getProductByID(id));
    }
  }, [id]);
  const productDataById = useMemo(
    () => productByIDFetchData,
    [productByIDFetchData],
  );

  console.log("productDataById", productDataById);
  return <ProductSummaryLayout productData={productDataById} />;
};

export default ProductSummaryDisplay;
