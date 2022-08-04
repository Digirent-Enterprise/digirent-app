import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductListLayout from "./productListLayout/productListLayout";
import { customAxios } from "../../../http-common";
import { getAllProducts } from "../../../store/selectors/product.selector";

export interface Products {
  id: number;
  image: string;
  title: string;
  price: number;
}

const ProductsListing = () => {
  const products = useSelector(getAllProducts);
  // console.log("products :>> ", products);
  return <ProductListLayout products={products} />;
};

export default ProductsListing;
