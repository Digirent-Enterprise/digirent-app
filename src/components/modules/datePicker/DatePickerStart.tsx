import React, { useState } from "react";

import type { Dayjs } from "dayjs";

import DatePickerStartCalendar from "./DatePickerStartCalendar/DatePickerStartCalendar";
import DatePickerStartSelector from "./DatePickerStartSelector/DatePickerStartSelector";

interface IDatePickerProps {
  selectedStartDate: Dayjs;
  onChange: (newDate: Dayjs) => void;
}

const DatePickerStart: React.FC<IDatePickerProps> = ({
  selectedStartDate,
  onChange,
}) => {
  const [showStartDate, setShowStartDate] = useState(selectedStartDate.clone());

  return (
    <div className="shadow-[0px_3px_8px_rgba(0,0,0,0.24)] p-[8px] rounded-lg min-w-[220px] mt-5">
      <DatePickerStartSelector
        shownDate={showStartDate}
        setShownDate={setShowStartDate}
      />

      <DatePickerStartCalendar
        selectedDate={selectedStartDate}
        shownDate={showStartDate}
        onChange={onChange}
      />
    </div>
  );
};

export default DatePickerStart;
