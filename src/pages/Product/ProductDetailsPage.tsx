import React from "react";
import { GalleryDisplay } from "../../components/modules";
import StaticGoogleMap from "../../components/modules/staticGoogleMap/StaticGoogleMap";
import BookingBoxDisplay from "../../components/elements/BookingBox/BookingBoxDisplay";
import ProductSummaryDisplay from "../../components/modules/productSummary/ProductSummaryDisplay";
import DefaultLayout from "../DefaultLayout";

const ProductDetailsPage = () => {
  return (
    <DefaultLayout>
      <div>
        <ProductSummaryDisplay />
      </div>
      <div>
        <GalleryDisplay />
      </div>
      <div className="w-full">
        <BookingBoxDisplay />
      </div>
      <div className="mt-10">
        <StaticGoogleMap/>
      </div>
    </DefaultLayout>
  );
};

export default ProductDetailsPage;
