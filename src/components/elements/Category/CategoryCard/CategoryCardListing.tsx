import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../../store/actions/category.action";
import { getAllCategoriesSelector } from "../../../../store/selectors/category.selector";
import CategoryCardLayout from "./CategoryCardLayout";

const CategoryCardListing = () => {
  const dispatch = useDispatch();
  const categoryFetchData = useSelector(getAllCategoriesSelector);

  const categoryData = useMemo(() => categoryFetchData, [categoryFetchData]);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return <CategoryCardLayout categories={categoryData} />;
};

export default CategoryCardListing;
