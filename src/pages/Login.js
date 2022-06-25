import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetData } from "../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const navTo = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { handelSubmit, setCurrentUser, signUpGoogle } = GetData();
  const animateMsg = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const signIn = (e) => {
    e.preventDefault();
    e.target.disabled = true;
    handelSubmit("signin", emailRef.current.value, passwordRef.current.value)
      .then((resp) => {
        setCurrentUser(resp.user);
        navTo("/");
      })
      .catch((err) => toast.error(`${err.message}`, animateMsg))
      .finally(() => (e.target.disabled = false));
  };
  const signUpWithGoogle = () => {
    signUpGoogle()
      .then((resp) => {
        setCurrentUser(resp.user);
        navTo("/");
      })
      .catch((err) => toast.error(`${err.message}`, animateMsg));
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
                type="password"
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
          <div className="flex items-center space-x-4">
            <hr className="w-full border border-gray-300" />
            <div className="font-semibold text-gray-400">OR</div>
            <hr className="w-full border border-gray-300" />
          </div>

          <button
            onClick={() => signUpWithGoogle()}
            className=" flex mx-auto items-center justify-center gap-2 rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
          >
            <FcGoogle size={20} />
            SIGN‑IN WITH GOOGLE
          </button>
        </section>
      </div>
      <ToastContainer />
    </main>
  );
};

export default Login;
