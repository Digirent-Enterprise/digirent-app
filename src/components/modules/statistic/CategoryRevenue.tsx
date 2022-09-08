import { useState, useEffect } from "react";
import { customAxios } from "../../../http-common";
import { COLOR_PALETTE } from "../../../utils/constants/chart.constants";
import { BarChart } from "./base/BarChart";
import ContainerCard from "./base/ContainerCard";

const CategoryRevenue = () => {
  const [chartData, setChartData] = useState({}) as any;
    const [labels, setLabels] = useState([]) as any;

  useEffect(() => {
    customAxios()
      .get("statistic/cats-revenue")
      .then((res: any) => {
        setChartData({
          label: "Revenue",
          fill: true,
          barThickness: "flex",
          backgroundColor: COLOR_PALETTE[0],
          data: Object.values(res.data),
        });
        setLabels(Object.keys(res.data));
      });
  }, []);
  return Object.keys(chartData).length !== 0 ? (
    <ContainerCard
      chart={
        <BarChart
          type="normal"
          title="Purchased by Categories"
          labels={labels}
          datasets={chartData}
        />
      }
    />
  ) : (
    <h1>Failed to load data</h1>
  );
};

export default CategoryRevenue;
