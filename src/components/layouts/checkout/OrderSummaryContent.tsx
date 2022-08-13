import React, { ReactNode, useState } from "react";
import RentPeriodDatetimePicker from "./RentPeriodDatetimePicker";

const OrderSummaryContent = () => {
  const [endDate, setEndDate] = useState("");
  const today = `${new Date().toLocaleString()}`;
  return (
    <div>
      <h5 className="text-2xl pb-4">Order Details</h5>
      <div className="flex flex-col grow px-0 md:flex-row">
        <div className="flex flex-col">
          <div className="md:pt-0 2xl:ps-4">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <p className="text-xl">Product</p>
                <div className="flex flex-row justify-between">
                  <div className="text-md justify-left pr-20">
                    MacBoock Ultra Max Pro Superlight 2025
                  </div>
                  <span className="text-red-600 left-0">$20</span>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-xl">Date</p>
                <div className="flex flex-row justify-between">
                  <div className="text-md justify-left pr-20">
                    {today} - {endDate}
                  </div>
                  <div>
                    <RentPeriodDatetimePicker
                      setEndDate={setEndDate}
                      endDate={endDate}
                    />
                  </div>
                </div>
              </div>
              <span className="h-0.5 w-full bg-gray" />
              <div>
                <h2 className="text-2xl font-bold text-gray">Payment Method</h2>
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
  );
};

export default OrderSummaryContent;
