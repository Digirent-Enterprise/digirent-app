import { BarChart } from "./base/BarChart";

const dataset = {
  label: "Revenue",
  fill: true,
  barThickness: "flex",
  backgroundColor: "red",
  data: [20, 15, 18, 91, 80, 41, 88, 20],
};

const CategoryRevenue = () => {
  return (
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
      datasets={dataset}
    />
  );
};

export default CategoryRevenue;
