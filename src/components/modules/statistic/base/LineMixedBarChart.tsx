import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
);

function LineMixedBarChart({ barData, lineData, labels, title }: any) {
  const options: any = {
    responsive: true,
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
    },
  };
  const data = {
    labels,
    datasets: [barData, lineData],
  };
  return (
    <Chart type="bar" data={data} options={options} width="28%" height="20%" />
  );
}

export default LineMixedBarChart;
