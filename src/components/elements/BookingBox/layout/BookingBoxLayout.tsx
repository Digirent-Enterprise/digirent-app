import { useState } from "react";
import dayjs from "dayjs";
import BookingBox from "../item/BookingBox";
import { DatePicker1 } from "../../../modules/datePicker/DatePicker1";
import { DatePicker2 } from "../../../modules/datePicker/DatePicker2";
const BookingBoxLayout = ({ productData }: any) => {
  const [date, setDate] = useState(dayjs());
  const [date2, setDate2] = useState(dayjs());
  return (
    <div className="flex flex-col justify-center">
      <div className="flex mt-10 w-full justify-center">
        <div className="min-w-[50%]">
          <div className="font-extrabold">Description</div>
          <div className="text-justify min-w-[220px]">
            {productData.description}
          </div>
        </div>
        <div className="">
          <BookingBox
            price={productData.rentalCost}
            borrow={date.format("DD/MM/YYYY")}
            returnDate={date2.format("DD/MM/YYYY")}
            rentalCost={productData.rentalCost}
            totalPrice={600}
          />
        </div>
      </div>
      <div className="flex sm:justify-center lg:justify-start lg:ml-80 gap-x-2">
        <DatePicker1 selectedDate1={date} onChange={setDate} />
        <DatePicker2 selectedDate2={date2} onChange={setDate2} />
      </div>
    </div>
  );
};
export default BookingBoxLayout;
