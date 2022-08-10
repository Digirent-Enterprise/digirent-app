import React, { useState } from "react";

import type { Dayjs } from "dayjs";

import { DatePickerCalendar1 } from "./DatePickerCalendar1/DatePickerCalendar";
import { DatePickerSelector1 } from "./DatePickerSelector1/DatePickerSelector";

export interface IDatePickerProps {
  selectedDate1: Dayjs;

  onChange: (newDate: Dayjs) => void;
}

export const DatePicker1: React.FC<IDatePickerProps> = ({
  selectedDate1,
  onChange,
}) => {
  const [shownDate1, setShownDate1] = useState(selectedDate1.clone());

  return (
    <div className=" shadow-[0px_3px_8px_rgba(0,0,0,0.24)] p-[8px] rounded-lg w-[320px]">
      <DatePickerSelector1
        shownDate={shownDate1}
        setShownDate={setShownDate1}
      />

      <DatePickerCalendar1
        selectedDate={selectedDate1}
        shownDate={shownDate1}
        onChange={onChange}
      />
    </div>
  );
};
