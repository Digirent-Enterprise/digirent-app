import * as React from "react";

type CardProps2 = {
  image: string;
};

export function Card2({ image }: CardProps2) {
  return (
    <div
      className={` 
    overflow-hidden 
    w-64 
    shadow-md 
    rounded-md 
    flex-col 
    justify-between 
    cursor-pointer 
    transition-transform
    hover:scale-105
    mb-7
    block
    ml-2
    `}
    >
      <img
        src={image}
        alt="pictures"
        className={`
       w-full
       block
       object-cover
      `}
      />
    </div>
  );
}
export default Card2;
