import React from "react";
import { Container, FormControl, FormLabel } from "@chakra-ui/react";
import { Select, OptionBase, GroupBase } from "chakra-react-select"

const categories = [
  {
    value: "Tablets and Cellphones",
    label: "Tablets and Cellphones"
  },
  {
    value: "Laptops",
    label: "Laptops"
  },
  {
    value: "Cameras",
    label: "Cameras"
  },
  {
    value: "Audio",
    label: "Audio"
  },
  {
    value: "Gaming and VR",
    label: "Gaming and VR"
  },
  {
    value: "E-Mobility",
    label: "E-Mobility"
  },
  {
    value: "Wearables",
    label: "Wearables"
  },
  {
    value: "Home Entertainment",
    label: "Home Entertainment"
  },
]

interface groupedOption extends OptionBase{
  value: string;
  label: string;
}


const CategoriesFilter = () => {
  return (
    <FormControl>
      <FormLabel>Categories</FormLabel>
      <Select <groupedOption, true, GroupBase<groupedOption>> isMulti name="categories" options={categories} placeholder="Select Categories" closeMenuOnSelect={false}/>
    </FormControl>
  );
};

export default CategoriesFilter;
