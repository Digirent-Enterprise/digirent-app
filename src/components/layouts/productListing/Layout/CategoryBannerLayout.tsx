import CategoryBanner from "../Items/CategoryBanner";

const CategoryBannerLayout = ({ productData }: any) => {
  return (
    <div className="w-full">
      <CategoryBanner
        bannerUrl={productData.image}
        bannerAlt={productData.name}
        amount={productData.products?.length}
      />
    </div>
  );
};

export default CategoryBannerLayout;
