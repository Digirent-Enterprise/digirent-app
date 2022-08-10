import React, { ReactNode } from "react";
import { DatePicker } from "chakra-ui-date-input";

interface IDateTimeProps {
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
}

const RentPeriodDatetimePicker: React.FC<IDateTimeProps> = ({ setEndDate }) => {
  return (
    <DatePicker
      placeholder="Date picker placeholder"
      name="date"
      onChange={(date: string) => setEndDate(date)}
    />
  );
};

export default RentPeriodDatetimePicker;
