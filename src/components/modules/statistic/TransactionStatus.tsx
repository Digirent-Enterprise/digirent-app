import React, { useEffect, useState } from "react";
import { customAxios } from "../../../http-common";
import PieChart from "./base/PieChart";

const TransactionStatus = () => {
  const [chartData, setChartData] = useState({}) as any;

  useEffect(() => {
    customAxios()
      .get("statistic/transaction-status")
      .then((res) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return Object.keys(chartData).length !== 0 && (
    <PieChart data={chartData} title="Transaction Status" />
  )
};

export default TransactionStatus;
