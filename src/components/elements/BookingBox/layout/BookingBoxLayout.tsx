import React, { useState } from "react";
import dayjs from "dayjs";
import BookingBox from "../item/BookingBox";
import DatePickerStart from "../../../modules/datePicker/DatePickerStart";
import DatePickerEnd from "../../../modules/datePicker/DatePickerEnd";

const BookingBoxLayout = ({ productData }: any) => {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex flex-col justify-center mt-10 ml-[32px] lg:flex-row md:flex-row">
        <div className="lg:mr-48 min-w-[50%] flex flex-col">
          <div className="font-extrabold">Description</div>
          <div className="text-justify min-w-[220px]">
            {productData.description}
          </div>
          <div className="flex flex-col gap-2 mt-10">
            <div className="font-extrabold">Rental period: </div>
            <div className="">
              <div className=" min-w-[220px]">
                {startDate.format("DD/MM/YYYY")} -{" "}
                {endDate.format("DD/MM/YYYY")}
              </div>
            </div>
          </div>
          <div className="flex gap-x-2">
            <DatePickerStart
              selectedStartDate={startDate}
              onChange={setStartDate}
            />
            <DatePickerEnd selectedEndDate={endDate} onChange={setEndDate} />
          </div>
        </div>
        <div className="sm:mt-10">
          <BookingBox
            productData={productData}
            price={productData.rentalCost}
            startDate={new Date(startDate.toString())}
            endDate={new Date(endDate.toString())}
            rentalCost={productData.rentalCost}
            rentalCostType={productData.rentalCostType}
          />
        </div>
      </div>
    </div>
  );
};
export default BookingBoxLayout;
