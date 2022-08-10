import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import classname from "classnames";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../../store/actions/product.action";
import { getFavoriteProducts } from "../../../../store/selectors/product.selector";
import Rating from "../Rating/Rating";

interface ProductCardProps {
  _id: string;
  name: string;
  brand: string;
  image?: string;
  rentalCost: string;
  rentalCostType?: string;
  theme?: any;
}

const productListing = classname("flex-col col-span-1 w-full");

const ProductCard = ({
  _id,
  name,
  brand,
  image,
  rentalCost,
  rentalCostType,
  theme = productListing,
}: ProductCardProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavoriteProducts);

  console.log("favorites", favorites);

  const product = { _id, name, brand, image, rentalCost, rentalCostType };

  const [like, setLike] = useState(false);

  const isFavorite = product._id in favorites;

  const isStored = (value: any) => {
    if (value) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
      setLike(!like);
    }
  };

  return (
    <div
      className={`${theme} mx-5 my-5 overflow-hidden transition-transform rounded-lg shadow-md cursor-pointer card aspect-w-1 aspect-h-1 hover:scale-105 xl:aspect-w-7 xl:aspect-h-8`}
    >
      <img src={image} alt="pictures" className="object-cover w-64 h-52" />
      <button
        type="submit"
        className="relative right-0 flex justify-center float-right p-3 text-black bg-white bottom-52"
        onClick={() => isStored(isFavorite)}
      >
        {!like ? (
          <AiOutlineHeart size="30" fill="red" />
        ) : (
          <AiFillHeart size="30" fill="red" />
        )}
      </button>
      <div className="p-5 card-content">
        <p className="text-lg font-bold uppercase text-transform:">{name}</p>
        <h4 className="font-bold">
          {rentalCost}$/ {rentalCostType}
        </h4>
        <div className="flex items-center mt-1 rating">
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
