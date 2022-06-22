import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetData } from "../context/AppContext";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navTo = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { handelSubmit, setCurrentUser, currentUser } = GetData();
  currentUser && navTo("/");
  const signIn = (e) => {
    e.preventDefault();
    e.target.disabled = true;
    handelSubmit("signin", emailRef.current.value, passwordRef.current.value)
      .then((resp) => {
        setCurrentUser(resp.user);
        navTo("/");
      })
      .catch((err) =>
        toast.error(`${err.message}`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      )
      .finally(() => (e.target.disabled = false));
  };

  return (
    <main className="relative min-h-screen w-full bg-white">
      <div className="p-6">
        <header className="flex w-full justify-end">
          <Link
            to="/signup"
            className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-3 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
          >
            SIGN UP
          </Link>
        </header>

        <section className="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
          <form className="space-y-4">
            <header className="mb-3 text-2xl font-bold">Log in</header>
            <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input
                type="text"
                ref={emailRef}
                placeholder="Email "
                className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
              />
            </div>
            <div className="flex w-full items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input
                ref={passwordRef}
                type="text"
                placeholder="Password"
                className="my-3 w-full border-none bg-transparent outline-none"
              />
              <Link
                to="/forgot-password"
                className="font-medium text-gray-400 hover:text-gray-500"
              >
                FORGOT?
              </Link>
            </div>
            <button
              onClick={(e) => signIn(e)}
              className=" disabled:bg-red-400 w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"
            >
              LOG IN
            </button>
          </form>
        </section>
      </div>
      <ToastContainer />
    </main>
  );
};

export default Login;
