import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { customAxios } from "../../../../http-common";
import { IMostRentalProduct } from "../../../../store/types/product.types";
import Spinner from "../../Spinner/Spinner";

const MostRentalProduct = () => {
  const { t } = useTranslation();
  const [mostRentalProducts, setMostRentalProducts] = useState<
    IMostRentalProduct[]
  >([]);

  useEffect(() => {
    customAxios()
      .get("product/most-rental")
      .then((res: any) => {
        const { data } = res;
        const sortedProducts = data.sort((itemA: any, itemB: any) =>
          itemA.rentalTimes > itemB.rentalTimes ? -1 : 1,
        );
        const mostRentalSortedProducts = sortedProducts.slice(0, 8);
        setMostRentalProducts(mostRentalSortedProducts);
      });
  }, []);

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
                    loading="lazy"
                    src={rental._id.images && rental._id.images[0]}
                    alt="rental"
                    className="object-scale-down pointer-events-none group-hover:opacity-75"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {rental._id.name}
                    </span>
                  </button>
                </div>
                <div className="mt-2 text-center">
                  <p className="inline-block mr-1 text-sm font-medium text-gray-900 pointer-events-none">
                    {rental._id.name} -
                  </p>
                  <p className="inline-block text-sm font-medium text-gray-500 pointer-events-none">
                    {rental._id.rentalCost}$
                  </p>
                </div>
                <p
                  className="block text-center text-sm font-medium text-gray-500 pointer-events-none"
                  style={{ color: "red", fontSize: "bold" }}
                >
                  Has been rented{" "}
                  {rental.rentalTimes > 1
                    ? `${rental.rentalTimes} times`
                    : `${rental.rentalTimes} time`}
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
