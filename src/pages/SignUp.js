import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetData } from "../context/AppContext";
import { ToastContainer, toast } from "react-toastify";

const SingUp = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const ConfirmPasswordRef = useRef();
  const navTo = useNavigate();
  const { handelSubmit, setCurrentUser, putUserName } = GetData();
  const animateMsg = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const signUp = async (e) => {
    e.preventDefault();
    e.target.disabled = true;
    try {
      if (ConfirmPasswordRef.current.value !== passwordRef.current.value)
        throw new Error("Password do not match ");
      const data = await handelSubmit(
        "signup",
        emailRef.current.value,
        passwordRef.current.value
      );
      await putUserName(fullNameRef.current.value);

      setCurrentUser(data.user);

      navTo("/");
    } catch (err) {
      toast.error(`${err.message}`, animateMsg);
    } finally {
      e.target.disabled = false;
    }
  };

  return (
    <main className="overflow-hidden relative min-h-screen w-full bg-white">
      <ToastContainer />
      <div className="p-6">
        <header className="flex w-full justify-end">
          <Link
            to="/login"
            className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-3 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
          >
            LOG IN
          </Link>
        </header>

        <section className="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
          <form className="space-y-4">
            <header className="mb-3 text-2xl font-bold"> Sign up</header>
            <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input
                type="text"
                ref={fullNameRef}
                placeholder="Full name "
                className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
              />
            </div>
            <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input
                ref={emailRef}
                type="text"
                placeholder="Email "
                className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
              />
            </div>
            <div className="flex w-[330px] items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                className="my-3 w-full border-none bg-transparent outline-none"
              />
            </div>
            <div className="flex w-[330px] items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input
                ref={ConfirmPasswordRef}
                type="password"
                placeholder="Confirm Password"
                className="my-3 w-full border-none bg-transparent outline-none"
              />
            </div>
            <button
              onClick={(e) => {
                signUp(e);
              }}
              className="disabled:bg-red-400 w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"
            >
              SIGN UP
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default SingUp;
