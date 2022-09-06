import React from "react";
import PieChart from "./base/PieChart";

export const data = {
  labels: [
    "active",
    "deactivated",
  ],
  datasets: [
    {
      data: [12, 19],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const UserStatus = () => {
  return <PieChart data={data} title="User Status" />;
};

export default UserStatus;
