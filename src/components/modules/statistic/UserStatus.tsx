import React, { useEffect, useState } from "react";
import { customAxios } from "../../../http-common";
import ContainerCard from "./base/ContainerCard";
import PieChart from "./base/PieChart";

const UserStatus = () => {
  const [chartData, setChartData] = useState({}) as any;

  useEffect(() => {
    customAxios()
      .get("statistic/user-status")
      .then((res: any) => {
        setChartData({
          labels: Object.keys(res.data),
          datasets: [
            {
              data: Object.values(res.data),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
          ],
        });
      });
  }, []);

  return Object.keys(chartData).length !== 0 ? (
    <ContainerCard
      chart={<PieChart data={chartData} title="User Status" />}
    />
  ) : (
    <h1>Failed to load data</h1>
  );
};

export default UserStatus;
