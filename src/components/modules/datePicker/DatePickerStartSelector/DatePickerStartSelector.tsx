import React from "react";
import { Dayjs } from "dayjs";

import clsx from "clsx";
import { BsChevronDown } from "react-icons/bs";
import { changeDateMonth } from "../../../../utils/formatCalendar";

import "./DatePickerStartSelector.css";

interface IDatePickerSelectorProps {
  shownDate: Dayjs;
  setShownDate: React.Dispatch<React.SetStateAction<Dayjs>>;
}
const DatePickerStartSelector = ({
  shownDate,
  setShownDate,
}: IDatePickerSelectorProps) => {
  const handleIconClick = (isNextMonth: boolean) => {
    return () => {
      setShownDate(changeDateMonth(shownDate, isNextMonth));
    };
  };

  return (
    <div className="DatePickerSelector">
      <div
        className={clsx(
          "DatePickerSelector__icon",
          "DatePickerSelector__iconLeft",
        )}
        onClick={handleIconClick(false)}
        aria-hidden="true"
      >
        <BsChevronDown />
      </div>

      <div className="DatePickerSelector__date">
        {shownDate.format("MMMM YYYY")}
      </div>

      <div
        className={clsx(
          "DatePickerSelector__icon",
          "DatePickerSelector__iconRight",
        )}
        onClick={handleIconClick(true)}
        aria-hidden="true"
      >
        <BsChevronDown />
      </div>
    </div>
  );
};

export default DatePickerStartSelector;
