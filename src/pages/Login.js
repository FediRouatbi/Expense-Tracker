import React from "react";

const Login = () => {
  return (
    <div className="login flex flex-col text-center items-center justify-center align-middle">
      <form className="flex flex-col text-center items-center">
        <label htmlFor="email">Email: </label>
        <input type="email" placeholder="example@email.com" />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" placeholder="password" />
      </form>
    </div>
  );
};

export default Login;
