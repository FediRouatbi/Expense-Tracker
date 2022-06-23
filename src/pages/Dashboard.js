import React from "react";
import Spendings from "../components/Spendings";
import Curve from "../components/Curve";
import Table from "../components/Table";
import Title from "../components/Title";
import Aside from "../components/Aside";

const Dashboard = () => {
  return (
    <div className=" w-full h-screen">
      <div className="p-11 pt-20 flex h-screen">
        <main className="w-2/3   flex flex-col gap-4">
          <Spendings />
          <Curve />
          <div>
            <Title />
            <Table allExpenses={false} />
          </div>
        </main>
        <Aside />
      </div>
    </div>
  );
};

export default Dashboard;
