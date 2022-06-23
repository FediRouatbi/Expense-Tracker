import React from "react";
import "./curve.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const Curve = () => {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];

  const data2 = [
    { x: 0, y: 3 },
    { x: 1, y: 4 },
    { x: 2, y: 6 },
    { x: 3, y: 4 },
    { x: 4, y: 9 },
    { x: 5, y: 7 },
    { x: 6, y: 1 },
    { x: 7, y: 3 },
    { x: 8, y: 8 },
    { x: 9, y: 6 },
  ];

  return (
    <div className="curve ">
      <div className="mx-auto w-[880px] text-center">
        <LineChart
          width={700}
          height={230}
          data={data}
          margin={{ bottom: 30, right: 20 }}
        >
          <Line type="monotone" dataKey="x" />
          <Line type="monotone" dataKey="y" />
          <CartesianGrid />
          <XAxis />
          <YAxis />
          {/* <Legend /> */}
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Curve;
