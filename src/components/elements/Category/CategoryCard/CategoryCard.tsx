import React from "react";
import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  categoryImage: string;
  categoryName: string;
  queryName: string;
}

const CategoryCard = ({ categoryImage, categoryName, queryName }: CategoryCardProps) => {
  const navigate = useNavigate()
  const clickHandler =((queryName: string) => {
    navigate(`../products?queryName=${queryName}`);
  })
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
    onClick={() => clickHandler(categoryName)}
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
      <div className="py-5 text-xl text-center" >{categoryName}</div>
    </div>
  );
};
export default CategoryCard;
