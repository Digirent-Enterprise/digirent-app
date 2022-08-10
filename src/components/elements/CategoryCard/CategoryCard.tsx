import React from "react";

interface ICategoryCard {
  categoryImage: string;
  categoryName: string;
}

const CategoryCard = ({ categoryImage, categoryName }: ICategoryCard) => {
  return (
    <div
      className="overflow-hidden
    h-[179px]
    w-[266px]
    shadow-md
    rounded-md
    flex
    flex-col
    justify-center
    items-center
    cursor-pointer
    transition-transform
    hover:scale-105
    bg-gray-100"
    >
      <img
        src={categoryImage}
        alt="category"
        className="
        w-[120px]
        h-[120px]
        object-cover
      "
      />
      <div className="text-center py-5 text-xl">{categoryName}</div>
    </div>
  );
};
export default CategoryCard;
