import CategoryBanner from "../Items/CategoryBanner";

const CategoryBannerLayout = ({ productData }: any) => {
  console.log(productData.products)
  return (
    <div className="w-full">
      <CategoryBanner
        bannerUrl={"https://unsplash.com/photos/WcYeiHMexR0"}
        bannerAlt={productData.name}
        amount={productData.products?.length}
      />
    </div>
  );
};

export default CategoryBannerLayout;
