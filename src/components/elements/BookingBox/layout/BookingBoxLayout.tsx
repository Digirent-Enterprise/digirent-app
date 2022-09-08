import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import BookingBox from "../item/BookingBox";

import "./Datepicker.css";

const BookingBoxLayout = ({ productData }: any) => {
  const { t } = useTranslation();
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
    // eslint-disable-next-line no-restricted-syntax
    for (const item of productData.excludeIntervals) {
      if (item.start && item.end) {
        let startTime = new Date(item.start);
        const endTime = new Date(item.end);
        exclude.push(startTime.setDate(startTime.getDate() - 1));
        exclude.push(endTime);
        exclude.push(startTime);
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
    <div>
      <div className="px-16 py-8">
        <div className="font-extrabold text-2xl pb-4">{t("Description")}</div>
        <div className="text-justify w-full h-32  overflow-y-auto pr-4 pl-1 border border-gray rounded-md">
          {productData.description}
        </div>
      </div>
      <div className="font-extrabold text-2xl pb-4 px-16 py-8">
        {t("RentalPeriod")}
      </div>
      <div className="">
        <div className="grid grid-cols-1  md:grid-cols-2 md:flex md:justify-between px-16 py-8">
          <div className="col-span-1 min-w-[220px]">
            <div className=" text-lg">
              {formatDate(startDate)} - {formatDate(endDate)}
            </div>

            <div className="">
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
          <div className="col-span-1 py-8 md:py-4">
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
    </div>
  );
};
export default BookingBoxLayout;
