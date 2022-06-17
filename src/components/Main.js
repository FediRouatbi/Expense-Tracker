import React from "react";
import "./main.scss";
import Spendings from "./Spendings";
import Curve from "./Curve";
import Table from "./Table";
const Main = () => {
  return (
    <main className="main p-4 pt-16 h-screen">
      <Spendings />
      <Curve />
      <Table  allExpenses={false}/>
    </main>
  );
};

export default Main;
