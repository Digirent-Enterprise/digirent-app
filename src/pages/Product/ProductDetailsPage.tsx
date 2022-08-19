import React from "react";
import {
  BookingBoxDisplay,
  GalleryDisplay,
  ProductSummaryDisplay,
  StaticGoogleMap,
} from "../../components";
import DefaultLayout from "../DefaultLayout";

const ProductDetailsPage = () => {
  return (
    <DefaultLayout>
      <ProductSummaryDisplay />
      <GalleryDisplay />
      <div className="w-full">
        <BookingBoxDisplay />
      </div>
      <div className="mt-10">
        <StaticGoogleMap />
      </div>
    </DefaultLayout>
  );
};

export default ProductDetailsPage;
