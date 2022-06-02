import React from "react";
import "./main.scss";
import Spendings from "./Spendings";
import Curve from "./Curve";
import Expenses from "./Expenses";
const Main = () => {
  return (
    <main className="main">
      <Spendings />
      <Curve />
      <Expenses />
    </main>
  );
};

export default Main;
