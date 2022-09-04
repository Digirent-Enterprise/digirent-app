import React, { useEffect, useRef, useState } from "react";
import { customAxios } from "../../../http-common";
import PieChart from "./base/PieChart";

interface IChartData {
  pending: number;
  paid: number;
}

const TransactionStatus = () => {
  const [chartData, setChartData] = useState<IChartData>({
    pending: 0,
    paid: 0,
  });

  useEffect(() => {
    customAxios()
      .get("statistic/transaction-status")
      .then((res) => {
        console.log("res", res.data);
        console.log("Object.keys(res.data) :>> ", Object.keys(res.data));

        setChartData(res.data);
        
        // console.log("chartData :>> ", chartData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const preparedChartData = {
    labels: chartData ? Object.keys(chartData) : [],
    datasets: [
      {
        data: chartData ? Object.values(chartData) : [],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      {console.log("chartData :>> ", chartData)}
      <PieChart data={preparedChartData} title="Transaction Status" />
    </>
  );
};

export default TransactionStatus;
