import { useParams, useSearchParams } from "react-router-dom";
// import { categoryBanner } from "../../../utils/constants/helper.constant";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CustomBreadcrumb } from "../../elements";
import { getCategoryByID } from "../../../store/actions/category.action";
import CategoryBannerLayout from "./Layout/CategoryBannerLayout";
import { getCategoriesByIdSelector } from "../../../store/selectors/category.selector";
import SearchResultsSection from "../search/SearchResultsSection";
import ProductCard from "../productCard/Item/ProductCard";
import { IProduct } from "../../../store/types/product.types";

const ProductListingCategory = () => {
  const [selected, setSelected] = useState<String>("");
  const [searchParams, setSearchParams] = useSearchParams();

  // const query = new URLSearchParams(useLocation().search);
  // const queryName = query.get("queryName");
  const queryName = searchParams.get("queryName");
  const dispatch = useDispatch();
  useEffect(() => {
    if (queryName) {
      dispatch(getCategoryByID(queryName));
    }
  }, [queryName]);

  const categoryFetchData = useSelector(getCategoriesByIdSelector);

  console.log(categoryFetchData, "asdasda");

  const categoryData = useMemo(() => categoryFetchData, [categoryFetchData]);
  const handleSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelected(value);
  };

  const product = categoryData.products as IProduct;

  return (
    // <>
    //   {categoryData && Object.keys(categoryData) && (
    //     <div className="gap-5">
    //       <div className="flex flex-col gap-5">
    //         <div className="flex flex-col gap-5">
    //           <div className="ml-10">
    //             <CustomBreadcrumb />
    //           </div>
    //           <div className="w-full flex justify-center">
    //             <CategoryBannerLayout productData={categoryData[0]} />
    //           </div>
    //           <div className="w-[95%] flex justify-end">
    //             <SearchResultsSection
    //               selectChange={handleSelected}
    //               selectedOption={selected}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-3 pb-10 mx-auto lg:py-12 lg:px-8">
    //         <div className="col-span-5 gap-24 w-full">
    //           <div className="px-8 py-6 w-full">
    //             {categoryData.map(() => (
    //               <ProductCard
    //                 name={product.name}
    //                 image={product.images[0]}
    //                 rentalCost={product.rentalCost}
    //                 rentalCostType={product.rentalCostType}
    //               />
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>
    <div>Hi</div>
  );
};

export default ProductListingCategory;
