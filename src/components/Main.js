import React from "react";
import "./main.scss";
import Spendings from "./Spendings";
import Curve from "./Curve";
import Expenses from "./Expenses";
const Main = () => {
  return (
    <main className="main p-4 pt-16">
      <Spendings />
      <Curve />
      <Expenses />
    </main>
  );
};

export default Main;
