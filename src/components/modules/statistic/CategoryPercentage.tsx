import React, { useEffect, useState } from "react";
import { customAxios } from "../../../http-common";
import { COLOR_PALETTE } from "../../../utils/constants/chart.constants";
import ContainerCard from "./base/ContainerCard";
import PieChart from "./base/PieChart";

const CategoryPercentage = () => {
  const [chartData, setChartData] = useState({}) as any;

  useEffect(() => {
    customAxios()
      .get("statistic/category-percentage")
      .then((res: any) => {
        setChartData({
          labels: res.data.map((x: any) => x.name),
          datasets: [
            {
              data: res.data.map((y: any) => y.count),
              backgroundColor: COLOR_PALETTE,
              borderColor: COLOR_PALETTE,
              borderWidth: 0,
            },
          ],
        });
      });
  }, []);
  return Object.keys(chartData).length !== 0 ? (
    <ContainerCard
      chart={<PieChart data={chartData} title="Category Percentage" />}
    />
  ) : (
    <h1>Failed to load data</h1>
  );
};

export default CategoryPercentage;
