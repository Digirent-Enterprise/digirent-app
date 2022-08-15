import React, { useState } from "react";
import ReactMapGL, { Marker } from "@goongmaps/goong-map-react";
import { GalleryDisplay } from "../../components";
import StaticGoogleMap from "../../components/modules/staticGoogleMap/StaticGoogleMap";
import BookingBoxDisplay from "../../components/elements/BookingBox/BookingBoxDisplay";
import ProductSummaryDisplay from "../../components/modules/productSummary/ProductSummaryDisplay";
import DefaultLayout from "../DefaultLayout";

const ProductDetailsPage = () => {
  const [viewport, setViewport] = React.useState({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 14,
  });
  return (
    <DefaultLayout>
      <div>
        <ProductSummaryDisplay />
      </div>
      <div className="mt-10">
        <GalleryDisplay />
      </div>
      <div>
        <BookingBoxDisplay />
      </div>
      <div>
        {/* <ReactMapGL
          {...viewport}
          width="100vw"
          height="100vh"
          onViewportChange={setViewport}
        >
          <Marker
            latitude={37.78}
            longitude={-122.41}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <div>You are here</div>
          </Marker>
        </ReactMapGL> */}
      </div>
      {/* <div className="mt-10 w-full">
        <StaticGoogleMap />
      </div> */}
    </DefaultLayout>
  );
};

export default ProductDetailsPage;
