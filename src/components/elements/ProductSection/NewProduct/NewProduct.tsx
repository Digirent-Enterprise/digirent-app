import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProductsSelector } from "../../../../store/selectors/product.selector";
import { IProduct } from "../../../../store/types/product.types";
import { newProductProps } from "./type";
import { DEFAULT_IMAGE } from "./constant";
import { useTranslation } from "react-i18next";

const ProductItem = (productItemProps: newProductProps) => {
  const { name, images, rentalCost } = productItemProps;
  const defaultImage = images![0] || DEFAULT_IMAGE;

  return (
    <a href="/" className="block">
      <div className="flex justify-center">
        <strong className="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black">
          {" "}
          New{" "}
        </strong>
      </div>

      <img
        alt="New Product"
        src={defaultImage}
        className="object-cover w-full -mt-3 h-96"
      />

      <h5 className="mt-4 text-sm text-black/90">{name}</h5>

      <div className="flex items-center justify-between mt-4 font-bold">
        <p className="text-lg">${rentalCost}</p>
      </div>
    </a>
  );
};

const NewProduct = () => {
  const {t} = useTranslation();
  const [newProducts, setNewProducts] = useState<IProduct[]>([]);
  const products = useSelector(getAllProductsSelector);
  useEffect(() => {
    const newOne = [...products];
    const sortedProducts = newOne.sort((itemA, itemB) =>
      itemA.createdDate > itemB.createdDate ? -1 : 1,
    );
    const newSortedProducts = sortedProducts.slice(0, 4);
    setNewProducts(newSortedProducts);
  }, [products]);
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto">
      <div>
        <span className="inline-block w-12 h-1 bg-[#b91c1c]" />

        <h2 className="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
          {t("newProduct")}
        </h2>
      </div>

      <div className="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
        {newProducts && (
          <>
            {newProducts!.map((item) => (
              <Link to={`/product/${item._id}`}>
                <ProductItem
                  key={item._id}
                  name={item.name}
                  images={item.images}
                  rentalCost={item.rentalCost}
                />
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default NewProduct;
