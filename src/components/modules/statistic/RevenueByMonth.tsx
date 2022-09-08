import React, { useEffect, useState } from "react";
import ContainerCard from "./base/ContainerCard";
import { customAxios } from "../../../http-common";
import LineMixedBarChart from "./base/LineMixedBarChart";
import { COLOR_PALETTE } from "../../../utils/constants/chart.constants";

const RevenueByMonth = () => {
  const [barChartData, setBarChartData] = useState([]) as any;
  const [lineChartData, setLineChartData] = useState([]) as any;
  const [labels, setLabels] = useState([]) as any;

  useEffect(() => {
    customAxios()
      .get("statistic/monthly-status")
      .then((res) => {
        setLabels(Object.keys(res.data));
        const accumulatedRevenue = Object.values(res.data).map(
          (
            // eslint-disable-next-line no-return-assign
            (sum) => (value: any) =>
              // eslint-disable-next-line no-param-reassign
              (sum += value)
          )(0),
        );
        setBarChartData({
          type: "bar" as const,
          label: "Revenue By Date",
          backgroundColor: COLOR_PALETTE,
          data: Object.values(res.data),
          borderColor: "white",
          borderWidth: 2,
        });
        setLineChartData({
          type: "line" as const,
          label: "Revenue Running Sum",
          borderColor: COLOR_PALETTE[4],
          fill: true,
          data: accumulatedRevenue,
        });
      });
  }, []);

  return (
    <ContainerCard
      chart={
        <LineMixedBarChart
          title="Revenue by date in the last 30 days"
          labels={labels}
          lineData={lineChartData}
          barData={barChartData}
        />
      }
    />
  );
};

export default RevenueByMonth;
