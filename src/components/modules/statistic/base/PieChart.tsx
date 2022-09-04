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
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: true,
        text: title,
        position: "top",
        font: {
          size: 20,
          weight: "bold",
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
  return (
    <div style={{ width: "600px", height: "600px" }}>
      {data !== undefined ? <Pie data={data} options={options} /> : <h1>hwwww</h1>}
    </div>
  );
};

export default PieChart;
