import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
);

const mainLine = {
  id: 2,
  fill: false,
  lineTension: 0.01,
  pointBackgroundColor: "#fff",
  pointHoverBackgroundColor: "#fff",
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBorderWidth: 2,
  pointRadius: 3,
  pointHitRadius: 10,
  borderWidth: 2,
  borderColor: "rgb(255, 99, 132)",
  backgroundColor: "rgba(255, 99, 132, 0.5)",
};

const straightLine = {
  id: 1,
  fill: false,
  pointHoverRadius: 2,
  pointBorderWidth: 0,
  pointRadius: 0,
  borderWidth: 1,
  borderColor: "rgb(53, 162, 235)",
  backgroundColor: "rgba(53, 162, 235, 0.5)",
};

const LineChart = ({
  dataPoints,
  mean,
  labels,
  backgroundColor,
  title,
}: any) => {
  const option: any = {
    responsive: true,

    scales: {
      yAxes: {
        position: "left",
        maintainAspectRatio: true,
        beginAtZero: false,
      },
    },
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
    datasetIdKey: "id",
    backgroundColor,
    labels,
    datasets: [
      { ...mainLine, label: "Temperature", data: dataPoints },
      { ...straightLine, label: "Mean", data: Array(7).fill(mean.toFixed(2)) },
    ],
  };
  return <Line data={data} options={option} width="28%" height="25%" />;
};

export default LineChart;
