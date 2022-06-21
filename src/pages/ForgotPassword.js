import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { GetData } from "../context/AppContext";
const ForgotPassword = () => {
  const { forgetPassword } = GetData();
  const emailRef = useRef();
  const animateMsg = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const reset = (e) => {
    e.preventDefault();
    e.target.disabled = true;
    forgetPassword(emailRef.current.value)
      .then(() => toast.success(`Password reset email sent!`, animateMsg))
      .catch((err) => toast.error(`${err.message}`, animateMsg))
      .finally(() => (e.target.disabled = false));
  };
  return (
    <main className="relative min-h-screen w-full bg-white">
      <div className="p-6">
        <header className="flex w-full justify-end">
          <div className="flex gap-3">
            <Link
              to="/signup"
              className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-3 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
            >
              SIGN UP
            </Link>
            <Link
              to="/login"
              className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-3 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
            >
              LOG IN
            </Link>
          </div>
        </header>

        <section className="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
          <div className="space-y-4">
            <header className="mb-3 text-2xl font-bold">Forgot Password</header>

            <div className="flex w-[330px] items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input
                ref={emailRef}
                type="text"
                placeholder="Email"
                className="my-3 w-full border-none bg-transparent outline-none"
              />
            </div>
            <button
              onClick={(e) => reset(e)}
              className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400 disabled:bg-red-400"
            >
              Reset Password
            </button>
          </div>
        </section>
        <ToastContainer />
      </div>
    </main>
  );
};

export default ForgotPassword;
