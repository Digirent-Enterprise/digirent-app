import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Gallery from "../Item/Gallery";

import { IProduct } from "../../../../store/types/product.types";
import { getProducts } from "../../../../store/actions/product.action";
import { getAllProducts } from "../../../../store/selectors/product.selector";
import { useParams } from "react-router-dom";

const GalleryLayout = () => {
  let serial = useParams()
  const productFetchData = useSelector(getAllProducts);

  const productData = useMemo(() => productFetchData, [productFetchData]);

  console.log("productData", productData);

  return (
    <Gallery
      firstImages={productData.images[0]}
      secondImages={productData.images[1]}
      thirdImages={productData.images[2]}
      fourthImages={productData.images[3]}
      fifthImages={productData.images[4]}
      images={productData.images}
    />
  );
};

export default GalleryLayout;
