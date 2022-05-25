import React from "react";
import Spend from "./Spend";
import "./Spendings.scss";
const Spendings = () => {
  return (
    <div className="spendings">
      <Spend data="Total" />
      <Spend data="Month" />
      <Spend data="Daily" />
    </div>
  );
};

export default Spendings;
