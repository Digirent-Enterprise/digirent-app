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
        w-[140px]
        h-[120px]
        object-scale-down"
      />
      <div className="py-5 text-xl text-center">{categoryName}</div>
    </div>
  );
};
export default CategoryCard;
