import React from "react";
import "./curve.scss";
import "../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries } from "react-vis";
import {
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
} from "react-vis/dist";

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
      <div className="mx-auto w-[700px]">
        <XYPlot width={700} height={200}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={data} />
          <LineSeries data={data2} />
        </XYPlot>
      </div>
    </div>
  );
};

export default Curve;
