import React, { useEffect, useState } from "react";
import { customAxios } from "../../../http-common";
import { COLOR_PALETTE } from "../../../utils/constants/chart.constants";
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
              backgroundColor: [COLOR_PALETTE[2], COLOR_PALETTE[5]],
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
