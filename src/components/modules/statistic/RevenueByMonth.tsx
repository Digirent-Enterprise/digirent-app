import React from "react";
import LineChart from "./base/LineChart";

const getDates = (startDate: any, endDate: any) => {
  let dates: any = [];
  // to avoid modifying the original date
  const theDate = new Date(startDate);
  while (theDate < endDate) {
    dates = [...dates, new Date(theDate)];
    theDate.setDate(theDate.getDate() + 1);
  }
  return dates;
};

const RevenueByMonth = () => {
  const today = new Date();
  const thirtyDaysPriorDate = new Date(today).setDate(today.getDate() - 7);

  const daysArray = getDates(thirtyDaysPriorDate, today).map((day: any) =>
    day.toISOString().substring(5, 10).replaceAll("-", "/"),
  );
  return (
    <LineChart
      backgroundColor="red"
      title="Revenue by Day"
      labels={daysArray}
      dataPoints={[34.5, 36.2, 37, 36.7, 35.9, 36.5, 35]}
      mean={
        [34.5, 36.2, 37, 36.7, 35.9, 36.5, 35].reduce(
          (cur, next) => cur + next,
          0,
        ) / 7
      }
    />
  );
};

export default RevenueByMonth;
