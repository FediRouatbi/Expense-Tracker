import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login flex flex-col items-center justify-center ">
      <form className="flex flex-col text-center items-center border-2 p-10 gap-4">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="py-1 px-2 outline-none text-center"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="py-1 px-2 outline-none text-center"
          />
        </div>

        <button className="bg-blue-500 py-1 px-4 rounded-md text-white">
          Sign In
        </button>
        <div className="w-full text-right text-blue-500 ">
          <Link to="/signup" className="w-full hover:underline">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
