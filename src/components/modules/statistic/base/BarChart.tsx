import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface ChartProps {
  datasets: any;
  labels: any;
  type: any;
  title: string;
  dataPoint1?: any;
  dataPoint2?: any;
  dataPoint3?: any;
}

export const BarChart = ({
  datasets,
  labels,
  title,
  type,
  dataPoint1,
  dataPoint2,
  dataPoint3,
}: ChartProps) => {
  const options: any = {
    legend: { display: true },
    plugins: {
      datalabels: {
        display: false,
        color: "#000",
        font: { size: 12 },
      },
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
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  const data = {
    labels,
    datasets:
      type === "stacked" ? [dataPoint1, dataPoint2, dataPoint3] : [datasets],
  };
  return <Bar data={data} options={options} width="28%" height="20%" />;
};
