import React from "react";

const CheckoutDetailsCard = ({ transactionData }: any) => {
  const { currency, rentalCost, productId } = transactionData;

  return (
    <div className="flex flex-col justify-between p-6 border-2 border-solid rounded-2xl border-gray">
      <div className="flex flex-col px-0">
        <div className="flex flex-col">
          <div className="md:pt-0 2xl:ps-4">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row space-x-4">
                <img
                  loading="lazy"
                  src={
                    productId.images == null
                      ? "https://via.placeholder.com/150"
                      : productId.images[0]
                  }
                  alt="order"
                  className="w-[40%] h-40 object-scale-down rounded-2xl border border-gray shadow-sm"
                />
                <div className="container mx-auto w-[60%]">
                  <h2 className="text-xl">{productId.name}</h2>
                  <div className="w-[80%] truncate">
                    {productId.description}
                  </div>
                  <span className="text-blue-200 truncate">Price</span>{" "}
                  {currency}
                  {rentalCost}
                </div>
              </div>
              <span className="h-0.5 w-full bg-gray" />
              <div>
                <h2 className="text-2xl font-bold text-gray">Price Details</h2>
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
  );
};

export default CheckoutDetailsCard;
