import React, { useState } from "react";
import dayjs from "dayjs";
import BookingBox from "../item/BookingBox";
import { DatePicker1 } from "../../../modules/datePicker/DatePicker1";
import { DatePicker2 } from "../../../modules/datePicker/DatePicker2";


const BookingBoxLayout = ({ productData }: any) => {
  const [date, setDate] = useState(dayjs());
  const [date2, setDate2] = useState(dayjs());
  return (
    <div className="w-full gap-2 flex flex-col">
      <div className="flex flex-col lg:flex-row md:flex-row mt-10 justify-center">
        <div className="lg:mr-48 min-w-[50%] flex flex-col">
          <div className="font-extrabold">Description</div>
          <div className="text-justify min-w-[220px]">
            {productData.description}
          </div>
          <div className="mt-10 gap-2 flex flex-col">
            <div className="font-extrabold">Rental period: </div>
            <div className=""><div className=" min-w-[220px]">{date.format("DD/MM/YYYY")} - {date2.format("DD/MM/YYYY")}</div></div>
          </div>
          <div className="flex gap-x-2">
            <DatePicker1 selectedDate1={date} onChange={setDate} />
            <DatePicker2 selectedDate2={date2} onChange={setDate2} />
          </div>
        </div>
        <div className="sm:mt-10">
          <BookingBox
            price={productData.rentalCost}
            borrow={date.format("DD/MM/YYYY")}
            returnDate={date2.format("DD/MM/YYYY")}
            rentalCost={productData.rentalCost}
            totalPrice={Number(productData.rentalCost)+Number(productData.rentalCost)}
          />
        </div>
      </div>
      
    </div>
  );
};
export default BookingBoxLayout;
