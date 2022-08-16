import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../../store/actions/product.action";
import { getProductByID as getProductByIDSel } from "../../../store/selectors/product.selector";
import GalleryLayout from "./Layout/GalleryLayout";

const GalleryDisplay = () => {
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

  return <GalleryLayout productData={productDataById} />;
};

export default GalleryDisplay;
