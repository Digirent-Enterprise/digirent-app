import React from "react";
import PieChart from "./base/PieChart";

export const data = {
  labels: ["Pending", "Paid"],
  datasets: [
    {
      data: [12, 19],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const TransactionStatus = () => {
  return <PieChart data={data} title="Transaction Status" />;
};

export default TransactionStatus;
