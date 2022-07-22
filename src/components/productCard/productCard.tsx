import StarRatingComponent from "react-star-rating-component";

import { useState } from "react";

type CardProps = {
  image?: string;
  title: string;
  description: string;
  price: string;
  title2: string;
};
export function Card({ image, title, description, price, title2 }: CardProps) {
  const [stars, setStar] = useState(0);
  return (
    <div className="overflow-hidden w-64 shadow-md rounded flex-col cursor-pointer transition-transform hover:scale-105 ml-2">
      <img src={image} alt="pictures" className={` h-52 w-64 object-cover`} />
      <button
        className={`
            w-6
            h-6
            flex-none
            order-none
            bg-transparent
            border-solid
            border
            border-grey-500
            rounded-md
            float-right
            relative
            bottom-48
            right-2.5
            opacity-75
            hover:text-red-400
            block
            `}
      >
        <p
          className={` font-medium text-gray-500 opacity-75 hover:text-red-400`}
        >
          ❤
        </p>
      </button>
      <p className={` text-grey-500 ml-1`}>{title}</p>
      <h3 className={` pt-0 pr-4 font-medium ml-1`}>{description}</h3>
      <h4 className="ml-1">{price}</h4>
      <div className="ml-1">
        <StarRatingComponent
          name="StarRating"
          value={stars}
          onStarClick={(nextValue) => {
            setStar(nextValue);
          }}
        />
      </div>

      <p className="text-sm ml-1">{title2}</p>
    </div>
  );
}
export default Card;
