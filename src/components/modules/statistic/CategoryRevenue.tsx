import { useState, useEffect } from "react";
import { customAxios } from "../../../http-common";
import { BarChart } from "./base/BarChart";
import ContainerCard from "./base/ContainerCard";

const CategoryRevenue = () => {
  const [chartData, setChartData] = useState({}) as any;

  useEffect(() => {
    customAxios()
      .get("statistic/cats-revenue")
      .then((res: any) => {
        setChartData({
          label: "Revenue",
          fill: true,
          barThickness: "flex",
          backgroundColor: "red",
          data: Object.values(res.data),
        });
      });
  }, []);
  return Object.keys(chartData).length !== 0 ? (
    <ContainerCard
      chart={
        <BarChart
          type="normal"
          title="Purchased by Categories"
          labels={[
            "Tablets and Cellphones",
            "Laptops",
            "Wearables",
            "Cameras",
            "Audio",
            "Home Entertainment",
            "Gaming and VR",
            "E-Mobility",
          ]}
          datasets={chartData}
        />
      }
    />) : (
    <h1>Failed to load data</h1>
  );
};

export default CategoryRevenue;
