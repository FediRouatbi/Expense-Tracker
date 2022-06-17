import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { GetData } from "../context/AppContext";
const SingUp = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { handelSubmit, signUpGoogle } = GetData();
  const signUp = (e) => {
    e.preventDefault();
    e.target.disabled = true;

    handelSubmit("signup", emailRef.current.value, passwordRef.current.value)
      .then((resp) => console.log(resp.user))
      .catch((err) => console.log(err))
      .finally(() => (e.target.disabled = false));
  };
  const signUpWithGoogle = () => {
    signUpGoogle()
      .then((resp) => console.log(resp.user))
      .catch((err) => console.log(err));
  };

  return (
    <main className="relative min-h-screen w-full bg-white">
      <div className="p-6">
        <header className="flex w-full justify-end">
          <Link
            to="/"
            className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-3 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
          >
            LOG IN
          </Link>
        </header>

        <section className="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
          <div className="space-y-4">
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
                type="text"
                placeholder="Password"
                className="my-3 w-full border-none bg-transparent outline-none"
              />
            </div>
            <button
              onClick={(e) => signUp(e)}
              className="disabled:bg-red-400 w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"
            >
              SIGN UP
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <hr className="w-full border border-gray-300" />
            <div className="font-semibold text-gray-400">OR</div>
            <hr className="w-full border border-gray-300" />
          </div>
          <div>
            <a
              onClick={() => signUpWithGoogle()}
              href="#"
              className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
            >
              GOOGLE
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SingUp;
