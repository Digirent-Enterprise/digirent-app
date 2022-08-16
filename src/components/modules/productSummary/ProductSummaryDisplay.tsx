import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../../store/actions/product.action";
import { getProductByID as getProductByIDSel } from "../../../store/selectors/product.selector";
import ProductSumaryLayout from "./layout/ProductSumaryLayout";

const ProductSummaryDisplay = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id, "runhere");
  const productByIDFetchData = useSelector(getProductByIDSel);
  useEffect(() => {
    if (id) dispatch(getProductByID(id));
  }, [id]);
  const productDataById = useMemo(
    () => productByIDFetchData,
    [productByIDFetchData],
  );

  return <ProductSumaryLayout productData={productDataById} />;
};

export default ProductSummaryDisplay;
