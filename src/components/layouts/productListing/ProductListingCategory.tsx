// import { useParams } from "react-router-dom";
// import { categoryBanner } from "../../../utils/constants/helper.constant";
import CategoryBanner from "./CategoryBanner";

const ProductListingCategory = () => {
  // const { id } = useParams();
  return (
    <div className="px-8 py-6">
      <h3 className="text-lg leading-6 font-medium text-[#111827]">
        Last 30 days
      </h3>
      <CategoryBanner bannerUrl="asdas" bannerAlt="phone" />
    </div>
  );
};

export default ProductListingCategory;
