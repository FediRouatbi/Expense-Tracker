import React from "react";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <main class="relative min-h-screen w-full bg-white">
      <div class="p-6">
        <header class="flex w-full justify-end">
          <div className="flex gap-3">
            <Link
              to="/signup"
              class="rounded-2xl border-b-2 border-b-gray-300 bg-white py-3 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
            >
              SIGN UP
            </Link>
            <Link
              to="/"
              class="rounded-2xl border-b-2 border-b-gray-300 bg-white py-3 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
            >
              LOG IN
            </Link>
          </div>
        </header>

        <section class="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
          <div class="space-y-4">
            <header class="mb-3 text-2xl font-bold">Forgot Password</header>

            <div class="flex w-[330px] items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
              <input
                type="text"
                placeholder="Password"
                class="my-3 w-full border-none bg-transparent outline-none"
              />
            </div>
            <button class="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">
              Reset Password
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ForgotPassword;
