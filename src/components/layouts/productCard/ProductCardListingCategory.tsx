import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import ProductListLayout from "./ProductLayoutList/ProductLayoutList";
import { getCategoriesByID as getCategoriesByIDSel } from "../../../store/selectors/category.selector";
import { getCategoryByID } from "../../../store/actions/category.action";
import { getProductByID } from "../../../store/actions/product.action";
import { getProductByID as getProductByIDSel } from "../../../store/selectors/product.selector";

const ProductsCardListingCategory = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const productFetchData = useSelector(getCategoriesByIDSel);
  useEffect(() => {
    if (name) dispatch(getCategoryByID(name));
  }, [name]);

  const productData = useMemo(() => productFetchData, [productFetchData]);
  console.log('category', productData)

  const productByIDFetchData = useSelector(getProductByIDSel);
  useEffect(() => {
    if (productData.products) dispatch(getProductByID(productData.products));
  }, [productData.products]);
  const productDataById = useMemo(
    () => productByIDFetchData,
    [productByIDFetchData],
  );
  console.log('products', productDataById)


  return <ProductListLayout products={productData.products} />;
};

export default ProductsCardListingCategory;
