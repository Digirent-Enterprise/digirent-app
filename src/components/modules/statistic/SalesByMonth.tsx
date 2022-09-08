import { useState, useEffect } from "react";
import { customAxios } from "../../../http-common";
import { COLOR_PALETTE } from "../../../utils/constants/chart.constants";
import { BarChart } from "./base/BarChart";
import ContainerCard from "./base/ContainerCard";

const SalesByMonth = () => {
  const [chartData, setChartData] = useState({}) as any;
  const [labels, setLabels] = useState([]) as any;

  useEffect(() => {
    customAxios()
      .get("statistic/yearly-revenue")
      .then((res: any) => {
        console.log("res.data :>> ", res.data);
        const sorted = Object.keys(res.data)
          .map((item) => {
            return {
              month: new Date(
                parseInt(item.split("/")[1]),
                parseInt(item.split("/")[0]) - 1,
              ),
              value: res.data[item],
            };
          })
          .sort(
            (cur: any, next: any) => cur.month.getTime() - next.month.getTime(),
          );

        setChartData({
          label: "Revenue",
          fill: true,
          barThickness: "flex",
          backgroundColor: COLOR_PALETTE[0],
          data: sorted.map((item) => item.value),
        });
        setLabels(
          sorted.map((item) =>
            item.month.toLocaleDateString("en-US", {
              year: "numeric",
              month: "numeric",
            }),
          ),
        );
      });
  }, []);
  return (
    <ContainerCard
      chart={
        <BarChart
          type="normal"
          title="Sales Revenue by Month"
          labels={labels}
          datasets={chartData}
        />
      }
    />
  );
};

export default SalesByMonth;
