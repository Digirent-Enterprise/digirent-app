import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoriesByID as getCategoriesByIDSel } from "../../../store/selectors/category.selector";
import { getCategoryByID } from "../../../store/actions/category.action";
import CategoryBannerLayout from "./Layout/CategoryBannerLayout";

const CategoryBannerDisplay = () => {
  const dispatch = useDispatch();
  const { queryName } = useParams();
  const productFetchData = useSelector(getCategoriesByIDSel);
  useEffect(() => {
    if (queryName) dispatch(getCategoryByID(queryName));
  }, [queryName]);

  const productData = useMemo(() => productFetchData, [productFetchData]);
  if (productData.length > 0){
    
    return <CategoryBannerLayout productData={productData[0]}/>;

  }
  return <CategoryBannerLayout productData={[]}/>;
};

export default CategoryBannerDisplay;
