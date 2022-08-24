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
      <h1 className=" text-xl font-bold ml-11">
        {bannerAlt} ({amount})
      </h1>
      <div className="flex justify-center items-center w-full h-[300px]">
        <img
          className=" w-[95%] h-full object-cover overflow-hidden rounded-md"
          src={bannerUrl}
          alt={bannerAlt}
        />
      </div>
    </div>
  );
};

export default CategoryBanner;
