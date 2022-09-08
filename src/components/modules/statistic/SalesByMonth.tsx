import { useState, useEffect } from "react";
import { customAxios } from "../../../http-common";
import { BarChart } from "./base/BarChart";
import ContainerCard from "./base/ContainerCard";

const SalesByMonth = () => {
  const [chartData, setChartData] = useState({}) as any;
  const [labels, setLabels] = useState([]) as any;

  useEffect(() => {
    customAxios()
      .get("statistic/yearly-revenue")
      .then((res: any) => {
        const sorted = Object.keys(res.data)
          .sort()
          .reduce((accumulator: any, key: any) => {
            accumulator[key] = res.data[key];

            return accumulator;
          }, {});
        console.log("sorted)", sorted);

        console.log("Object.keys(sorted)", Object.keys(sorted));
        console.log("Object.values(sorted)", Object.values(sorted));

        setChartData({
          label: "Revenue",
          fill: true,
          barThickness: "flex",
          backgroundColor: "pink",
          data: Object.values(sorted),
        });
        setLabels(Object.keys(sorted));
      });
  }, []);

const SalesByMonth = () => {
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
