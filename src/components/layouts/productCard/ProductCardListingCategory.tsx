import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import ProductListLayout from "./ProductLayoutList/ProductLayoutList";
import { getCategoriesByID as getCategoriesByIDSel } from "../../../store/selectors/category.selector";
import { getCategoryByID } from "../../../store/actions/category.action";
import { getProductByID } from "../../../store/actions/product.action";
import { getProductByIDSelector } from "../../../store/selectors/product.selector";

const ProductsCardListingCategory = () => {
  const dispatch = useDispatch();
  const { queryName } = useParams();
  const productFetchData = useSelector(getCategoriesByIDSel);
  useEffect(() => {
    if (queryName) dispatch(getCategoryByID(queryName));
  }, [queryName]);

  const productData = useMemo(() => productFetchData, [productFetchData]);
  if (productData.length > 0){
    
    return <ProductListLayout products={productData[0].products}/>;

  }
  return <ProductListLayout products={[]}/>;
};

export default ProductsCardListingCategory;