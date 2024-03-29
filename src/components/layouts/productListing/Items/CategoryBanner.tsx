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
      <h1 className=" text-xl font-bold">
        {bannerAlt} ({amount})
      </h1>
      <div className="flex justify-center items-center w-full h-[280px]">
        <img
          loading="lazy"
          className=" w-[100%] h-full object-cover overflow-hidden rounded-md"
          src={bannerUrl}
          alt={bannerAlt}
        />
      </div>
    </div>
  );
};

export default CategoryBanner;
