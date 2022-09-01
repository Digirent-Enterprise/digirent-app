import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookingBox from "../item/BookingBox";

import "./Datepicker.css";

const BookingBoxLayout = ({ productData }: any) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [excludedDates, setExcludedDates] = useState<any>([]);
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const formatDate = (date: any) => {
    const d = new Date(date);
    function pad(s: any) {
      return s < 10 ? `0${s}` : s;
    }
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
  };

  const onHandleAddDates = () => {
    const exclude = [...excludedDates];
    for (let item of productData.excludeIntervals) {
      if (item.start && item.end) {
        let startTime = new Date(item.start);
        const endTime = new Date(item.end);
        exclude.push(startTime.setDate(startTime.getDate() - 1));
        exclude.push(endTime);
        exclude.push(startTime);
        // @ts-ignore
        while (startTime < endTime) {
          startTime = new Date(startTime.setDate(startTime.getDate() + 1));
          exclude.push(startTime);
        }
      }
    }
    setExcludedDates(exclude);
  };

  useEffect(() => {
    onHandleAddDates();
  }, []);

 
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
                  onChange={onChange}
                  minDate={new Date()}
                  inline
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  excludeDates={excludedDates}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:mt-10 ml-[35px] lg:ml-0">
          <BookingBox
            productData={productData}
            price={productData.rentalCost}
            startDate={startDate ? new Date(startDate) : undefined}
            endDate={endDate ? new Date(endDate) : undefined}
            rentalCost={productData.rentalCost}
            rentalCostType={productData.rentalCostType}
          />
        </div>
      </div>
    </div>
  );
};
export default BookingBoxLayout;
