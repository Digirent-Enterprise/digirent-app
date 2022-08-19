import React from "react";
import { BackToPreviousPage } from "../../modules";

const CheckoutDetailsCard: React.FC<any> = () =>
  // props?: IProduct
  {
    return (
      <div>
        <div className="pb-4">
          <BackToPreviousPage page="product" />
        </div>
        <div className="container p-6 border-2 border-solid rounded-2xl border-gray">
          <div className="flex flex-col px-0 md:flex-row">
            <div className="flex flex-col">
              <div className="md:pt-0 2xl:ps-4">
                <div className="flex flex-col space-y-4">
                  <div className="flex space-x-4">
                    <img
                      src="https://source.unsplash.com/user/erondu/1600x900"
                      alt="order"
                      className="w-[40%] h-40 rounded-2xl border border-gray shadow-sm"
                    />
                    <div>
                      <h2 className="text-xl">Macbook Pro</h2>
                      <p className="text-md">Lorem ipsum dolor sit amet, tet</p>
                      <span className="text-red-600">Price</span> $20
                    </div>
                  </div>
                  <span className="h-0.5 w-full bg-gray" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray">
                      Price Details
                    </h2>
                    <div className="flex flex-row justify-between">
                      <p className="pt-4 text-md text-gray">$150 x 1 month</p>
                      <p className="pt-4 text-md text-gray">$150 </p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p className="pt-4 text-md text-gray">Taxes</p>
                      <p className="pt-4 text-md text-gray">$5</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p className="pt-4 text-md text-gray">Service Fee</p>
                      <p className="pt-4 text-md text-gray">$10</p>
                    </div>
                  </div>
                  <span className="h-0.5 w-full bg-gray" />
                </div>
                <h3 className="text-lg font-bold underline-offset-4 text-gray">
                  Totals
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default CheckoutDetailsCard;
