import React from "react";
import { useNavigate } from "react-router-dom";
import Rating from "../Rating/Rating";

interface ProductCardProps {
  name: string;
  image?: string;
  rentalCost: number;
  rentalCostType?: string;
  id: string;
}

const ProductCard = ({
  name,
  image,
  rentalCost,
  rentalCostType,
  id,
}: ProductCardProps) => {
  const navigate = useNavigate();

  const productShadow = "shadow-[0px_0px_5px_2px_rgba(0,0,0,0.15)]";

  return (
    <div
      aria-hidden="true"
      onClick={() => navigate(`/product/${id}`, { replace: true })}
      className={`${productShadow} flex flex-col items-center col-span-1 w-full my-5 overflow-hidden transition-transform rounded-lg
 cursor-pointer card aspect-w-1 aspect-h-1 hover:scale-105 xl:aspect-w-7 xl:aspect-h-8`}
    >
      <div className="p-10 card-content">
        <img
          loading="lazy"
          src={image}
          alt="pictures"
          className="sm:object-scale-down lg:h-36 lg:w-auto"
        />
        <p className="text-lg font-bold uppercase text-transform:">{name}</p>
        <h4 className="font-bold">
          {/* Type: Day, Month, Year */}
          {rentalCost}$/{rentalCostType}
        </h4>
        <div className="flex items-center mt-1 rating">
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
