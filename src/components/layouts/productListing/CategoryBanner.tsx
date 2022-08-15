interface CategoryBannerProps {
  bannerUrl: string;
  bannerAlt: string;
}
const CategoryBanner = ({ bannerUrl, bannerAlt }: CategoryBannerProps) => {
  return <img src={bannerUrl} alt={bannerAlt} />;
};

export default CategoryBanner;
