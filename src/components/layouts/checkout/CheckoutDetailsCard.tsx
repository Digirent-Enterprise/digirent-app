import React from "react";

const CheckoutDetailsCard = ({ transactionData }: any) => {
  const { currency, rentalCost, productId } = transactionData;

  return (
    <div>
      <div className="flex flex-col justify-between p-6 border-2 border-solid rounded-2xl border-gray">
        <div className="flex flex-col px-0 md:flex-row">
          <div className="flex flex-col">
            <div className="md:pt-0 2xl:ps-4">
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <img
                    loading="lazy"
                    src={
                      productId.images == null
                        ? "https://via.placeholder.com/150"
                        : productId.images[0]
                    }
                    alt="order"
                    className="w-[40%] h-40 rounded-2xl border border-gray shadow-sm"
                  />
                  <div>
                    <h2 className="text-xl">{productId.name}</h2>
                    <p className="text-md">{productId.description}</p>
                    <span className="text-red-600">Price</span> {currency}
                    {rentalCost}
                  </div>
                </div>
                <span className="h-0.5 w-full bg-gray" />
                <div>
                  <h2 className="text-2xl font-bold text-gray">
                    Price Details
                  </h2>
                  <div className="flex flex-row justify-between">
                    <p className="pt-4 text-md text-gray">
                      {currency}
                      {productId.rentalCost} x 1 month
                    </p>
                    <p className="pt-4 text-md text-gray">{rentalCost} </p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p className="pt-4 text-md text-gray">Taxes</p>
                    <p className="pt-4 text-md text-gray">$0</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p className="pt-4 text-md text-gray">Service Fee</p>
                    <p className="pt-4 text-md text-gray">$0</p>
                  </div>
                </div>
                <span className="h-0.5 w-full bg-gray" />
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-lg font-bold underline-offset-4 text-gray">
                  Totals
                </div>
                <div>
                  {currency}
                  {rentalCost}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetailsCard;
