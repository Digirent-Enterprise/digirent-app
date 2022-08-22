interface CategoryBannerProps {
  bannerUrl: string;
  bannerAlt: string;
  amount: number;
}

const CategoryBanner = ({
  bannerUrl,
  bannerAlt,
  amount,
}: CategoryBannerProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className=" text-lg font-bold ml-10">
        {bannerAlt}({amount})
      </h1>
      <div className="flex justify-center items-center w-full h-[300px]">
        <img className="w-[95%] h-full items-center overflow-hidden" src={bannerUrl} alt={bannerAlt} />
      </div>
    </div>
  );
};

export default CategoryBanner;
