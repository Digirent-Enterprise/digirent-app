// import { useParams } from "react-router-dom";
// import { categoryBanner } from "../../../utils/constants/helper.constant";
import CategoryBannerDisplay from "./CategoryBannerDisplay";
import ProductsCardListingCategory from "../productCard/ProductCardListingCategory";
import { CustomBreadcrumb } from "../../elements";

const ProductListingCategory = () => {
  return (
    <div className="px-8 py-6">
      <ProductsCardListingCategory />
    </div>
  );
};

export default ProductListingCategory;
