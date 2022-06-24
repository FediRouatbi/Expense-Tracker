import React, { useState, useRef, useEffect } from "react";

import { MdLibraryAdd } from "react-icons/md";
import { v4 as uuid } from "uuid";
import Table from "../components/Table";
import { GetData } from "../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
const AllExpenses = () => {
  const { addExpense } = GetData();
  const [add, setAdd] = useState(false);
  const productNameRef = useRef();
  const productColorRef = useRef();
  const productCategoryRef = useRef();
  const productPriceRef = useRef();
  const productDateRef = useRef();
  const animateMsg = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const addE = (e) => {
    e.preventDefault();
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    addExpense({
      id: uuid(),
      name: productNameRef.current.value,
      color: productColorRef.current.value,
      category: productCategoryRef.current.value,
      price: productPriceRef.current.value,
      date: productDateRef.current.value || `${yyyy}-${mm}-${dd}`,
    });

    console.log(productDateRef.current.value);
    toast.success("Item have been add succsessfuly", animateMsg);
    productNameRef.current.value = "";
    productColorRef.current.value = "";
    productCategoryRef.current.value = "";
    productPriceRef.current.value = "";
    productDateRef.current.value = "";
  };

  return (
    <div className=" h-screen  w-full overflow-hidden relative">
      <div className="p-4 absolute top-16 left-10  w-3/6  flex justify-between items-center ">
        <label className="sr-only">Search</label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
        <button className=" " onClick={() => setAdd((prev) => !prev)}>
          <MdLibraryAdd size={30} className="text-sky-500" />
        </button>
      </div>
      <div className=" flex p-11 pt-40  gap-4 h-screen ">
        <div className="relative  w-2/3 overflow-y-auto">
          <Table allExpenses={true} />
        </div>

        {add && (
          <h1 className="flex-grow  ">
            <form
              onSubmit={(e) => addE(e)}
              className="flex flex-col gap-3 [&>*]:border-2 [&>*]:rounded-md [&>*]:p-2"
            >
              <input
                type="text"
                placeholder="PRODUCT NAME	"
                required
                ref={productNameRef}
              />
              <input type="text" placeholder="COLOR	" ref={productColorRef} />
              <input
                type="text"
                placeholder="CATEGORY	"
                ref={productCategoryRef}
              />
              <input
                type="number"
                placeholder="PRICE	"
                required
                ref={productPriceRef}
              />
              <input type="date" placeholder="Date" ref={productDateRef} />
              <button className="bg-sky-500 text-white">ADD</button>
            </form>
          </h1>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AllExpenses;
