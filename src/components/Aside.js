import React from "react";
import "./aside.scss";
import Title from "./Title";

import { GetData } from "../context/AppContext";
const Aside = () => {
  const { allExpense } = GetData();
  const inputList = new Set();
  let duplicates = new Set();
  //expenses with no id and date so we can compare objects
  const expenses = allExpense.map((elm) => {
    const { id, date, ...rest } = elm;
    return rest;
  });
  for (const item of expenses) {
    if (inputList.has(JSON.stringify(item))) {
      duplicates.add(JSON.stringify(item));
    } else {
      inputList.add(JSON.stringify(item));
    }
  }
  duplicates = [...duplicates].map((elm) => JSON.parse(elm));
  return (
    <aside className="aside">
      <Title text="Recurring" />
      <div className="expense">
        <table className=" border-separate border-spacing-x-1 border-spacing-y-4">
          <thead className="bg-slate-100">
            <tr>
              <th className="border border-slate-300">Name</th>
              <th className="border border-slate-300">Category</th>
              <th className="border border-slate-300">Color</th>
              <th className="border border-slate-300">Price</th>
            </tr>
          </thead>
          <tbody className="border">
            {duplicates.map((elm, i) => (
              <tr className="text-center" key={i}>
                <td className="border border-slate-300">{elm.name}</td>
                <td className="border border-slate-300">{elm.category}</td>
                <td className="border border-slate-300">{elm.color}</td>
                <td
                  className={`border ${
                    elm.price > 0 ? "bg-lime-300" : "bg-red-300"
                  } `}
                >
                  ${Math.abs(elm.price)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </aside>
  );
};

export default Aside;
