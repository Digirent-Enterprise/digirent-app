import axios from "axios";
import { useEffect, useState } from "react";
import ProductListLayout from "./productListLayout/productListLayout";
import { Products } from "./interface/interface";

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
