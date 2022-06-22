import React from "react";
import { MdDelete } from "react-icons/md";
import { GetData } from "../context/AppContext";
const Table = ({ allExpenses }) => {
  const { allExpense, deleteExpense } = GetData();
  const number = allExpenses ? allExpense.length : 3;
  const deleteE = (e) => {
    deleteExpense(e.currentTarget.getAttribute("data-id"));
  };
  return (
    <div className="w-full mx-auto  ">
      <div className="relative shadow-md sm:rounded-lg">
        <div className="">
          <table className="max-h-min w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Color
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Date
                </th>
                {allExpenses && (
                  <>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">delete</span>
                    </th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {allExpense?.slice(0, number).map((elm, i) => (
                <tr
                  key={i}
                  className={`${
                    elm.price > 0 ? "bg-green-400/20" : "bg-red-400/20"
                  } transition-all ease-in-out duration-500 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600`}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {elm.name}
                  </th>
                  <td className="px-6 py-4 text-center">{elm.color}</td>
                  <td className="px-6 py-4 text-center">{elm.category}</td>
                  <td className="px-6 py-4 text-center">
                    ${Math.abs(elm.price)}
                  </td>
                  <td className="px-6 py-4 text-center">{elm.date}</td>
                  {allExpenses && (
                    <>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          <MdDelete
                            onClick={(e) => deleteE(e)}
                            className="inline-block"
                            size={20}
                            color="#ff8787"
                            data-id={elm.id}
                          />
                        </a>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
