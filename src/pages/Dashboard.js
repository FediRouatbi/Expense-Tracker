import React from "react";
import Spendings from "../components/Spendings";
import Curve from "../components/Curve";
import Table from "../components/Table";
import Title from "../components/Title";
import { GetData } from "../context/AppContext";
const Main = () => {
  return (
    <main className="p-4 pt-16 h-screen w-4/5 flex flex-col gap-4">
      <Spendings />
      <Curve />
      <div>
        <Title />
        <Table allExpenses={false} />
      </div>
    </main>
  );
};

export default Main;
