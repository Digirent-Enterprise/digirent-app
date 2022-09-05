import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {
  data: any;
  title: string;
}

const PieChart = ({ data, title }: ChartProps) => {
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
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
