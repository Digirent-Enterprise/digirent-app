import React, { useState } from "react";

import type { Dayjs } from "dayjs";

import DatePickerEndCalendar from "./DatePickerEndCalendar/DatePickerEndCalendar";
import DatePickerEndSelector from "./DatePickerEndSelector/DatePickerEndSelector";

interface IDatePickerProps {
  selectedEndDate: Dayjs;
  onChange: (newDate: Dayjs) => void;
}

const DatePickerEnd: React.FC<IDatePickerProps> = ({
  selectedEndDate,
  onChange,
}) => {
  const [showStartDate, setShowEndDate] = useState(selectedEndDate.clone());

  return (
    <div className="shadow-[0px_3px_8px_rgba(0,0,0,0.24)] p-[8px] rounded-lg min-w-[220px] mt-5">
      <DatePickerEndSelector
        shownDate={showStartDate}
        setShownDate={setShowEndDate}
      />

      <DatePickerEndCalendar
        selectedDate={selectedEndDate}
        shownDate={showStartDate}
        onChange={onChange}
      />
    </div>
  );
};

export default DatePickerEnd;
