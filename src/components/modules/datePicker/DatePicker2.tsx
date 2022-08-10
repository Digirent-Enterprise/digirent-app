import React, { useState } from "react";

import type { Dayjs } from "dayjs";

import { DatePickerCalendar2 } from "./DatePickerCalendar2/DatePickerCalendar";
import { DatePickerSelector2 } from "./DatePickerSelector2/DatePickerSelector";

export interface IDatePickerProps {
  selectedDate2: Dayjs;

  onChange: (newDate: Dayjs) => void;
}

export const DatePicker2: React.FC<IDatePickerProps> = ({
  selectedDate2,
  onChange,
}) => {
  const [shownDate2, setShownDate2] = useState(selectedDate2.clone());

  return (
    <div className=" shadow-[0px_3px_8px_rgba(0,0,0,0.24)] p-[8px] rounded-lg w-[320px]">
      <DatePickerSelector2
        shownDate={shownDate2}
        setShownDate={setShownDate2}
      />

      <DatePickerCalendar2
        selectedDate={selectedDate2}
        shownDate={shownDate2}
        onChange={onChange}
      />
    </div>
  );
};
