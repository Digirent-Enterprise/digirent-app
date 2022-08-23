// import { useParams } from "react-router-dom";
// import { categoryBanner } from "../../../utils/constants/helper.constant";
import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CustomBreadcrumb } from "../../elements";
import { getCategoryByID } from "../../../store/actions/category.action";
import ProductListLayout from "../productCard/ProductLayoutList/ProductLayoutList";
import CategoryBannerLayout from "./Layout/CategoryBannerLayout";
import { getCategoriesByIdSelector } from "../../../store/selectors/category.selector";

const ProductListingCategory = () => {
  const query = new URLSearchParams(useLocation().search)
  const queryName = query.get("queryName")
  const dispatch = useDispatch();
  const productFetchData = useSelector(getCategoriesByIdSelector);
  useEffect(() => {
    if (queryName) dispatch(getCategoryByID(queryName));
  }, [queryName]);

  const productData = useMemo(() => productFetchData, [productFetchData]);
  if (productData.length > 0){
    return (
      <div className="gap-5">
        <div className="flex flex-col gap-5">
            <CustomBreadcrumb />
            <div className="flex justify-center items-center"><CategoryBannerLayout productData={productData[0]}/></div>
        </div>
        <div className="grid grid-cols-5 pb-10 mx-auto max-w-7xl lg:py-12 lg:px-8">
          <div className="col-span-5 gap-24">
            <div className="px-8 py-6">
            <ProductListLayout products={productData[0].products}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <ProductListLayout products={[]}/>
      <CategoryBannerLayout productData={[]}/>
    </div>
  );
};

export default ProductListingCategory;
