interface CategoryBannerProps {
  bannerUrl: string;
  bannerAlt: string;
  amount: number;
}
  
const CategoryBanner = ({ bannerUrl, bannerAlt, amount }: CategoryBannerProps) => {
  
  return(
    <div>
      <h1>{bannerAlt}({amount})</h1>
      <img src={bannerUrl} alt={bannerAlt} />
    </div>
  ); 
};

export default CategoryBanner;
