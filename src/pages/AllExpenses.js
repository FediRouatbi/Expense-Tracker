import React, { useState, useRef } from "react";

import { MdLibraryAdd } from "react-icons/md";
import { v4 as uuid } from "uuid";
import Table from "../components/Table";
import { GetData } from "../context/AppContext";
const AllExpenses = () => {
  const { addExpense } = GetData();
  const [add, setAdd] = useState(false);
  const prductNameRef = useRef();
  const prductColorRef = useRef();
  const prductCategoryRef = useRef();
  const prductPriceRef = useRef();
  const addE = (e) => {
    e.preventDefault();
    addExpense({
      id: uuid(),
      name: prductNameRef.current.value,
      color: prductColorRef.current.value,
      category: prductCategoryRef.current.value,
      price: prductPriceRef.current.value,
    });
  };

  return (
    <div className="p-4 pt-16 h-screen w-full flex">
      <div className=" w-8/12 relative">
        <Table allExpenses={true} />
        <button
          className="absolute top-9 right-9 "
          onClick={() => setAdd((prev) => !prev)}
        >
          <MdLibraryAdd size={30} className="text-sky-500" />
        </button>
      </div>

      {add && (
        <h1 className="flex-grow pt-20 pl-10 ">
          <form className="flex flex-col gap-3 [&>*]:border-2 [&>*]:rounded-md [&>*]:p-2">
            <input type="text" placeholder="PRODUCT NAME	" ref={prductNameRef} />
            <input type="text" placeholder="COLOR	" ref={prductColorRef} />
            <input type="text" placeholder="CATEGORY	" ref={prductCategoryRef} />
            <input type="text" placeholder="PRICE	" ref={prductPriceRef} />
            <button className="bg-sky-500 text-white" onClick={(e) => addE(e)}>
              ADD
            </button>
          </form>
        </h1>
      )}
    </div>
  );
};

export default AllExpenses;
