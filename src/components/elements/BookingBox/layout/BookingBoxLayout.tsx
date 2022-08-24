import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookingBox from "../item/BookingBox";

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
      return s < 10 ? "0" + s : s;
    }
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
  };

  if (startDate > endDate) {
    alert("Please choose valid dates");
    setEndDate(startDate);
  }
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
                {formatDate(startDate)} - {formatDate(endDate)}
              </div>
              <div className="flex gap-x-2">
                <DatePicker
                  selected={startDate}
                  onChange={onChange}
                  minDate={new Date()}
                  inline
                />
                <DatePicker
                  selected={endDate}
                  onChange={onChange2}
                  minDate={startDate}
                  inline
                />
              </div>
            </div>
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
