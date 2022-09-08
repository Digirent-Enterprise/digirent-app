import React from "react";

interface CategoryCardProps {
  categoryImage: string;
  categoryName: string;
}

const CategoryCard = ({ categoryImage, categoryName }: CategoryCardProps) => {
  return (
    <div
      className="overflow-hidden
    h-full
    w-full
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
        loading="lazy"
        src={categoryImage}
        alt="category"
        className="
        lg:w-[140px]
        lg:h-[120px]
        w-[70px]
        h-[60px]
        object-scale-down"
      />
      <div className="p-8 text-md lg:text-xl text-center">{categoryName}</div>
    </div>
  );
};
export default CategoryCard;
