import React, { ReactNode } from "react";
import DatePicker from "react-datepicker";

interface IDateTimeProps {
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  endDate: string;
}

const RentPeriodDatetimePicker: React.FC<IDateTimeProps> = ({
  setEndDate,
  endDate,
}) => {
  return (
    <DatePicker
      selected={new Date(endDate)}
      onChange={(date: Date) => setEndDate(`${date}`)}
    />
  );
};

export default RentPeriodDatetimePicker;
