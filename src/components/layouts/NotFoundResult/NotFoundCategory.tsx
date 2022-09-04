import React from "react";

const imageURL = "https://www.orientappliances.pk//images/no.svg";
const NotFoundCategory = () => (
  <div className="mb-10">
    <img src={imageURL} alt="" className="w-100 h-100" />
    <h1 className=" text-[#6b7280]">No product available</h1>
  </div>
);

export default NotFoundCategory;
