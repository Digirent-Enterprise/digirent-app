import { BarChart } from "./base/BarChart";

const dataset = {
  label: "Revenue",
  fill: true,
  barThickness: "flex",
  backgroundColor: "pink",
  data: [20, 15, 18, 91, 80, 41, 88, 20, 10, 25, 35, 50],
};

const SalesByMonth = () => {
  return (
    <BarChart
      type="normal"
      title="Sales Revenue by Month"
      labels={[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]}
      datasets={dataset}
    />
  );
};

export default SalesByMonth;
