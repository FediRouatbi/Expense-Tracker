import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [10, 5, 122, 990, 223, 500, 450],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const Curve = () => {
  return (
    <div className=" p-2 rounded-lg border-gray-400 border h-64 ">
      <div className="h-60 mx-auto">
        <Line
          options={(options, { maintainAspectRatio: false })}
          data={data}
          height={150}
        />
      </div>
    </div>
  );
};

export default Curve;
