import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../../../store/types/category.types";
import CategoryCard from "./CategoryCard";

// import CategoryCard from "./CategoryCard";

const CategoryCardLayout = ({ categories }: any) => {
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    setCurrentItems(categories);
  }, [categories]);

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
        {currentItems.map((category: ICategory) => {
          return (
            <Link to={category._id} key={category._id + Math.random()}>
              <CategoryCard
                categoryName={category.name}
                categoryImage={category.image}
                queryName={category.queryName}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryCardLayout;
