import React from "react";
import PriceRange from "./priceRange/PriceRange";

const FilterPanel = (selectedPrice: any, changePrice: any) => {
  return <PriceRange value={selectedPrice} changePrice={changePrice} />;
};

export default FilterPanel;
