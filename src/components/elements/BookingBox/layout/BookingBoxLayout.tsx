import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import BookingBox from "../item/BookingBox";

import "./Datepicker.css";

const BookingBoxLayout = ({ productData }: any) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onChange = (dates: any) => {
    const start = dates;
    setStartDate(start);
  };
  const onChange2 = (dates: any) => {
    const end = dates;
    setEndDate(end);
  };
  const formatDate = (date: any) => {
    const d = new Date(date);
    function pad(s: any) {
      return s < 10 ? `0${s}` : s;
    }
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
  };

  if (startDate > endDate) {
    toast.warning("Please choose valid rental period", {
      theme: "dark",
    });
    setEndDate(startDate);
  }
  return (
    <div className="flex flex-col justify-center w-full gap-2">
      <div className="flex flex-col justify-center mt-10 lg:flex-row">
        <div className="ml-[35px] lg:ml-0 lg:mr-64 min-w-[50%] flex flex-col">
          <div className="font-extrabold">Description</div>
          <div className="text-justify min-w-[220px]">
            {productData.description}
          </div>
          <div className="flex flex-col gap-2 mt-10">
            <div className="font-extrabold">Rental period: </div>
            <div className=" min-w-[220px]">
              {formatDate(startDate)} - {formatDate(endDate)}
              <div className="flex gap-x-2 mt-5 flex-col md:flex-row lg:flex-row">
                <DatePicker
                  wrapperClassName="date-picker"
                  selected={startDate}
                  onChange={onChange}
                  minDate={new Date()}
                  inline
                />
                <DatePicker
                  wrapperClassName="date-picker"
                  selected={endDate}
                  onChange={onChange2}
                  minDate={startDate}
                  inline
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:mt-10 ml-[35px] lg:ml-0">
          <BookingBox
            price={productData.rentalCost}
            borrow={startDate}
            returnDate={endDate}
            startDate={startDate}
            endDate={endDate}
            rentalCost={productData.rentalCost}
            rentalCostType={productData.rentalCostType}
          />
        </div>
      </div>
    </div>
  );
};
export default BookingBoxLayout;
