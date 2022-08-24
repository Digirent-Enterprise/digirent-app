import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  BookingBoxDisplay,
  GalleryDisplay,
  ProductSummaryDisplay,
  StaticGoogleMap,
} from "../../components";
import DefaultLayout from "../DefaultLayout";
import { getProductByIDSelector } from "../../store/selectors/product.selector";
import { getProductByID } from "../../store/actions/product.action";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const selectedProduct = useSelector(getProductByIDSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getProductByID(id));
    }
  }, [id]);
  return (
    <DefaultLayout>
      {selectedProduct && (
        <>
          <ProductSummaryDisplay name={selectedProduct.name} />
          <GalleryDisplay productData={{ images: selectedProduct.images }} />
          <div className="w-full">
            <BookingBoxDisplay {...selectedProduct} />
          </div>
          <div className="mt-10">
            <StaticGoogleMap />
          </div>
        </>
      )}
    </DefaultLayout>
  );
};

export default ProductDetailsPage;
