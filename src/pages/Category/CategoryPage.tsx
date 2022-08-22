import { ProductListingCategory } from "../../components";
import DefaultLayout from "../DefaultLayout";
import CategoryBannerDisplay from "../../components/layouts/productListing/CategoryBannerDisplay";
import {CustomBreadcrumb} from "../../components";

const CategoryPage = () => {
  return (
    <DefaultLayout>
      <div className="gap-5">
        <div className="flex flex-col gap-5">
            <CustomBreadcrumb />
            <div className="flex justify-center items-center"><CategoryBannerDisplay /></div>
        </div>
        <div className="grid grid-cols-5 pb-10 mx-auto max-w-7xl lg:py-12 lg:px-8">
          <div className="col-span-5 gap-24">
            <ProductListingCategory />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CategoryPage;
