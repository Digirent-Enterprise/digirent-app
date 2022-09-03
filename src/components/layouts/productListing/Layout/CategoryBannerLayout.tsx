import CategoryBanner from "../Items/CategoryBanner";

const CategoryBannerLayout = ({ categoryData }: any) => {
  return (
    <div className="w-full px-8 pb-12">
      <CategoryBanner
        bannerUrl={categoryData[0]?.bannerUrl}
        bannerAlt={categoryData[0]?.name}
        amount={categoryData[0]?.products?.length}
      />
    </div>
  );
};

export default CategoryBannerLayout;
