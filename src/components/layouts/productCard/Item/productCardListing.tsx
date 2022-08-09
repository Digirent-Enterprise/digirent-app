import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Rating from "../Rating/Rating";

interface Props {
  name: string;
  // brand: string;
  image?: string;
  description?: string;
  rentalCost: string;
  rentalCostType?: string;
}

const ProductCard: React.FC<Props> = (props) => {
  const { name, image, rentalCost, rentalCostType } = props;
  const [like, setLike] = useState(false);

  const handleAddToFavourite = () => {
    setLike(!like);
  };
  return (
    <div className="card overflow-hidden w-full aspect-w-1 aspect-h-1 shadow-md rounded-lg flex-col col-span-1 cursor-pointer transition-transform hover:scale-105 my-5 mx-5 xl:aspect-w-7 xl:aspect-h-8">
      <img src={image} alt="pictures" className="h-52 w-64 object-cover" />
      <button
        type="submit"
        className="text-black bg-white float-right relative bottom-52 right-0 flex justify-center p-3"
        onClick={handleAddToFavourite}
      >
        {!like ? (
          <AiOutlineHeart size="30" fill="red" />
        ) : (
          <AiFillHeart size="30" fill="red" />
        )}
      </button>
      <div className="card-content p-5">
        <p className="font-bold text-lg text-transform: uppercase">{name}</p>
        <h4 className="font-bold">
          {/* Type: Day, Month, Year */}
          {rentalCost}$/{rentalCostType}
        </h4>
        <div className="rating flex items-center mt-1">
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
