import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
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
  const [like, setLike] = useState(false);
  const navigate = useNavigate();
  const handleAddToFavourite = () => {
    setLike(!like);
  };

  const productShadow = "shadow-[0px_0px_5px_2px_rgba(0,0,0,0.15)]";

  return (
    <div
      aria-hidden="true"
      onClick={() => navigate(`/product/${id}`, { replace: true })}
      className={`${productShadow} flex-col col-span-1 w-full mx-5 my-5 overflow-hidden transition-transform rounded-lg
 cursor-pointer card aspect-w-1 aspect-h-1 hover:scale-105 xl:aspect-w-7 xl:aspect-h-8`}
    >
      <button
        type="submit"
        className="relative right-0 flex justify-end float-right p-3 text-black bg-white bottom-52"
        onClick={handleAddToFavourite}
      >
        {!like ? (
          <AiOutlineHeart size="30" fill="red" />
        ) : (
          <AiFillHeart size="30" fill="red" />
        )}
      </button>
      <div className="p-10 card-content">
        <img src={image} alt="pictures" className="object-cover w-64 h-52" />
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
