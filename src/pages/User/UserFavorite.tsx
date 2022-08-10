import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { FavoriteContainer, UserTab } from "../../components";
import ProductCard from "../../components/layouts/productCard/Item/ProductCard";
import { getFavoriteProducts } from "../../store/selectors/product.selector";
import DefaultLayout from "../DefaultLayout";

const UserFavorite = () => {
  const favorites = useSelector(getFavoriteProducts);

  const productFav = classNames("flex-col p-6");
  return (
    <DefaultLayout>
      <UserTab />
      <FavoriteContainer favorites={favorites}>
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-6">
            {Object.values(favorites).map((favorite: any) => (
              <ProductCard
                key={favorite._id}
                _id={favorite._id}
                brand={favorite.brand}
                image={favorite.images[0]}
                rentalCost={favorite.rentalCost}
                rentalCostType={favorite.rentalCostType}
                theme={productFav}
                name=""
              />
            ))}
          </div>
        </div>
      </FavoriteContainer>
    </DefaultLayout>
  );
};

export default UserFavorite;
