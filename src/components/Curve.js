import React from "react";
import { GetData } from "../context/AppContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { GiExpense } from "react-icons/gi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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
      text: "Chart.js Bar Chart",
    },
  },
};
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const fixOrderOfDays = (daysOfWeek) => {
  const T = new Date();
  const dd = String(T.getDate()).padStart(2, "0");
  const mm = String(T.getMonth() + 1).padStart(2, "0");
  const yyyy = T.getFullYear();
  const today = new Date().getDay() + 1;
  let ordredDays = daysOfWeek.splice(0, today);
  ordredDays.unshift(...daysOfWeek);
  ordredDays[today] = "Today";

  ordredDays = ordredDays
    .reverse()
    .map((el, i) => [el, `${yyyy}-${mm}-${dd - i}`])
    .reverse();
  return ordredDays;
};

const dayAndDateList = fixOrderOfDays(days);
const labels = dayAndDateList.map((elm) => elm[0]);
export const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: [5456, 5, 54, 8, 21, 8, 300],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Expense",
      data: [545, 54, 54, 5, 546, 4, 654],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const Curve = () => {
  const { allExpense } = GetData();
  console.log(allExpense);
  const arr = dayAndDateList.map((elm) =>
    allExpense.filter((exp) => exp.date === elm[1])
  );
  const expence = arr.map((elm) =>
    elm
      .filter((exp) => exp.price > 0)
      .reduce((acc, curr) => acc + +curr.price, 0)
  );
  const income = arr.map((elm) =>
    elm
      .filter((exp) => exp.price < 0)
      .reduce((acc, curr) => acc + Math.abs(+curr.price), 0)
  );

  data.datasets[0].data = expence; //Expense
  data.datasets[1].data = income; //Income
  return (
    <div className=" p-2 rounded-lg border-gray-400 border h-64 ">
      <div className="h-60 mx-auto">
        <Bar options={(options, { maintainAspectRatio: false })} data={data} />
      </div>
    </div>
  );
};

export default Curve;
