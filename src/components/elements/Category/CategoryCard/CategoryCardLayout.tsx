import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../../../../store/actions/category.action";
import { getAllCategoriesSelector } from "../../../../store/selectors/category.selector";
import { ICategory } from "../../../../store/types/category.types";
import CategoryCard from "./CategoryCard";

// import CategoryCard from "./CategoryCard";

const CategoryCardLayout = ({ categories }: any) => {
  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
        {categories &&
          categories.map((cate: ICategory) => {
            return (
              <Link to={`/category?queryName=${cate.queryName}`}>
                <CategoryCard
                  key={cate._id}
                  categoryName={cate.name}
                  categoryImage={cate.image}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default CategoryCardLayout;
