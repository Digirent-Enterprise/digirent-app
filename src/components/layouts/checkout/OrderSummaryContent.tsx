import React from "react";
import PaymentAccordion from "./PaymentAccordion";

const OrderSummaryContent = () => {
  const today = `${new Date().toLocaleString()}`;
  return (
    <div className="container flex flex-col grow">
      <h5 className="pb-4 text-2xl">Order Summary</h5>
      <div className="flex flex-col w-full px-0 shrink">
        <div className="flex flex-col">
          <div className="md:pt-0 2xl:ps-4">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <p className="text-xl">Product</p>
                <div className="flex flex-row justify-between">
                  <div className="text-md justify-left">
                    MacBoock Ultra Max Pro Superlight 2025
                  </div>
                  <span className="text-red-600">$20</span>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-xl">Date</p>
                <div className="flex flex-row justify-between">
                  <div className="text-md justify-right">{today}</div>
                  <div />
                </div>
              </div>
              <span className="h-0.5 w-full bg-gray" />
              <div>
                <h2 className="text-2xl font-bold text-gray">Payment Method</h2>
              </div>
              <PaymentAccordion />
              <span className="h-0.5 w-full bg-gray" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryContent;
