import React from "react";
import Spendings from "../components/Spendings";
import Curve from "../components/Curve";
import Table from "../components/Table";
import Title from "../components/Title";
import { GetData } from "../context/AppContext";

import Aside from "../components/Aside";

const Dashboard = () => {
  return (
    <div className="flex">
      <main className="p-4 pt-16 h-screen w-[74%] flex flex-col gap-4">
        <Spendings />
        <Curve />
        <div>
          <Title />
          <Table allExpenses={false} />
        </div>
      </main>
      <Aside />
    </div>
  );
};

export default Dashboard;
