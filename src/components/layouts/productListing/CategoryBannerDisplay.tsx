import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoriesByID as getCategoriesByIDSel } from "../../../store/selectors/category.selector";
import { getCategoryByID } from "../../../store/actions/category.action";
import CategoryBannerLayout from "./Layout/CategoryBannerLayout";

const CategoryBannerDisplay = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const productFetchData = useSelector(getCategoriesByIDSel);
    useEffect(() => {
      if (id) dispatch(getCategoryByID(id));
    }, [id]);
  
    const productData = useMemo(() => productFetchData, [productFetchData]);

  return <CategoryBannerLayout productData={productData} />
};

export default CategoryBannerDisplay;