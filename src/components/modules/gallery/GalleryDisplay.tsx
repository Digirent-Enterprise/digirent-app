import React from "react";

import GalleryLayout from "./Layout/GalleryLayout";

type GalleryDisplayProps = {
  productData: {
    images: string[];
  };
};
const GalleryDisplay = ({ productData }: GalleryDisplayProps) => {
  return <GalleryLayout productData={productData} />;
};

export default GalleryDisplay;
