import React, { useMemo } from "react";
import { Dayjs } from "dayjs";
import clsx from "clsx";

import { getCalendarRows } from "../../../../utils/formatCalendar";
import "./DatePickerEndCalendar.css";

interface IDatePickerCalendarProps {
  shownDate: Dayjs;
  selectedDate: Dayjs;
  onChange: (newDate: Dayjs) => void;
}

const DatePickerEndCalendar = ({
  shownDate,
  selectedDate,
  onChange,
}: IDatePickerCalendarProps) => {
  const handleSelectDate = (value: Dayjs) => {
    return () => onChange(value);
  };

  const rows = useMemo(() => getCalendarRows(shownDate), [shownDate]);

  return (
    <>
      <div className="DatePickerCalendar__header">
        {rows[0].map(({ value }, i) => (
          <div key={i} className="DatePickerCalendar__cell">
            {value.format("dd")}
          </div>
        ))}
      </div>

      {rows.map((cells, rowIndex) => (
        <div key={rowIndex} className="DatePickerCalendar__row">
          {cells.map(({ text, value }, i) => (
            <div
              key={`${text} - ${i}`}
              className={clsx(
                "DatePickerCalendar__cell",
                "DatePickerCalendar__dayCell",
                {
                  DatePickerCalendar__dayCell_selected:
                    value.toString() === selectedDate.toString(),
                },
              )}
              onClick={handleSelectDate(value)}
              aria-hidden="true"
            >
              {text}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default DatePickerEndCalendar;
