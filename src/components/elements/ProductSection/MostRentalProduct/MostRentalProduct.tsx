import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { customAxios } from "../../../../http-common";
import { IProduct } from "../../../../store/types/product.types";
import Spinner from "../../Spinner/Spinner";

const MostRentalProduct = () => {
  const { t } = useTranslation();
  const [mostRentalProducts, setMostRentalProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    customAxios()
      .get("product/most-rental")
      .then((res: any) => {
        const { data } = res;
        const sortedProducts = data.sort((itemA: any, itemB: any) =>
          itemA.rentalTimes > itemB.rentalTimes ? -1 : 1,
        );
        const mostRentalSortedProducts = sortedProducts.slice(0, 7);
        setMostRentalProducts(mostRentalSortedProducts);
      });
  }, []);

  useEffect(() => {
    console.log("mostRentalProducts", mostRentalProducts)
  }, [])
  return (
    <div className="px-8 py-6">
      <h3 className="text-lg leading-6 font-medium text-[#111827] py-4">
        {t("MostRent")}
      </h3>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {mostRentalProducts && Object.keys(mostRentalProducts).length > 0 ? (
          <>
            {mostRentalProducts.map((rental) => (
              <li className="relative">
                <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                  <img
                    src=""
                    alt=""
                    className="object-cover pointer-events-none group-hover:opacity-75"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {rental.name}
                    </span>
                  </button>
                </div>
                <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                  {rental.name}
                </p>
                <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                  {rental.rentalCost}
                </p>
              </li>
            ))}
          </>
        ) : (
          <Spinner />
        )}
      </ul>
    </div>
  );
};

export default MostRentalProduct;
