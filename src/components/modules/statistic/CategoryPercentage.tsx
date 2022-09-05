import React, { useEffect, useState } from "react";
import { customAxios } from "../../../http-common";
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
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        });
      });
  }, []);
  return Object.keys(chartData).length !== 0 ? (
    <PieChart data={chartData} title="Category Percentage" />
  ) : (
    <h1>Failed to load data</h1>
  );
};

export default CategoryPercentage;
