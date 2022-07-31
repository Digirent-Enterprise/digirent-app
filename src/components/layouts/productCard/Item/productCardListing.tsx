import React from "react";
import "../../../../index.css";
import { AiOutlineHeart } from "react-icons/ai";
import Rating from "../Rating/Rating";

interface Props {
  title: string;
  image: string;
  price: number;
}

const productCardListing: React.FC<Props> = function (props) {
  const { title, image, price } = props;
  return (
    <div className="card overflow-hidden w-50 shadow-md rounded flex-col col-span-1 cursor-pointer transition-transform hover:scale-105 my-5 mx-5">
      <img src={image} alt="pictures" className="h-52 w-64 object-cover" />
      <button
        type="submit"
        className="w-6 h-6 flex-none order-none bg-white border-solid border border-grey-500 rounded-md float-right relative bottom-48 right-0 hover:text-red-400 block"
      >
        <AiOutlineHeart />
      </button>
      <div className="card-content p-5">
        <span className="text-sm opacity-50">Brand</span>
        <p className="font-bold text-lg">{title}</p>
        <h4 className="font-bold">$ {price} / month</h4>
        <div className="rating flex items-center mt-1">
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default productCardListing;
