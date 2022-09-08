import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {
  data: any;
  title: string;
}

const PieChart = ({ data, title }: ChartProps) => {
  console.log("data :>> ", data);
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: title,
        position: "top",
        align: "start",
        font: {
          size: 20,
        },
      },
      legend: {
        position: "right",
        rtl: true,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
    },
  };
  return <Pie data={data} options={options} width="28%" height="15%" />;
};

export default PieChart;
