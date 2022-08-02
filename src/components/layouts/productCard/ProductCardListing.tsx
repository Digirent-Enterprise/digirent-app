import axios from "axios";
import { useEffect, useState } from "react";
import ProductListLayout from "./productListLayout/productListLayout";

export interface Products {
  id: number;
  image: string;
  title: string;
  price: number;
}

const ProductsListing = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const getProduct = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  };
  useEffect(() => {
    const fetchProductList = async () => {
      const productList = await getProduct();
      setProducts(productList);
    };
    fetchProductList();
  }, []);

  return <ProductListLayout products={products} />;
};

export default ProductsListing;
