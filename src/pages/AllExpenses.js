import React, { useState } from "react";

import { MdLibraryAdd, MdSearch } from "react-icons/md";

import Table from "../components/Table";
const AllExpenses = () => {
  const [addExpense, setAddExpense] = useState(false);
  return (
    <div className="p-4 pt-16 h-screen w-4/5">
      <Table allExpenses={true} />
    </div>
  );
};

export default AllExpenses;
