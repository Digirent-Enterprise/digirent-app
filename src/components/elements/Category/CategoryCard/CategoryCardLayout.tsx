import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../../store/selectors/category.selector";

import CategoryCard from "./CategoryCard";

const CategoryCardLayout = () => {
  const categoryFetchData = useSelector(getAllCategories);

  const categoryData = useMemo(() => categoryFetchData, []);
  return <CategoryCard categoryData={categoryData} />;
};

export default CategoryCardLayout;
