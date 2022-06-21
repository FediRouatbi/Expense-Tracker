import React, { useRef } from "react";
import { GetData } from "../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
const Settings = () => {
  const { deletAccount, updateE, updateP, currentUser } = GetData();
  const emailRef = useRef();
  const passwordRef = useRef();
  const animateMsg = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const update = (e) => {
    e.preventDefault();

    if (emailRef.current.value) {
      e.target.disabled = true;
      updateE(emailRef.current.value)
        .then(() => toast.success("Email change successfully", animateMsg))
        .catch((err) => toast.error(err.message, animateMsg));
      emailRef.current.value = "";
    }
    if (passwordRef.current.value) {
      e.target.disabled = true;
      updateP(passwordRef.current.value)
        .then(() => toast.success("Password change successfully", animateMsg))
        .catch((err) => toast.error(err.message, animateMsg));
      passwordRef.current.value = "";
    }
    e.target.disabled = false;
  };

  const deleteAcc = () => {
    const answer = window.confirm(
      "are you sure you want to delete your account ? "
    );
    if (answer)
      deletAccount()
        .then(() => {
          toast.success("done", animateMsg);
        })
        .catch((err) => toast.error(err.message, animateMsg));
  };
  return (
    <div className="  h-screen w-full ">
      <div className="p-11 w-4/5">
        <h1 className="text-xl my-4">Settings</h1>
        <div className="flex flex-col justify-items-end">
          <ul className="flex justify-between items-center my-2">
            <li className="">Currency</li>
            <select className="">
              <option defaultValue>US Dollar</option>
              <option>European Euro</option>
              <option>Pound </option>
              <option>Tunisian Dinar</option>
              <option>Ghanaian Cedis</option>
            </select>
          </ul>
          <ul className="flex justify-between items-center my-2">
            <li>Language</li>
            <select className="">
              <option defaultValue>English</option>
              <option>French</option>
              <option>Arabic</option>
              <option>German</option>
              <option>Portuguese</option>
              <option>Spanish</option>
            </select>
          </ul>
          <ul className="flex justify-between items-center my-2">
            <li>Theme</li>
            <select className="">
              <option>Light</option>
              <option>Dark</option>
              <option defaultValue>Default</option>
            </select>
          </ul>

          <ul className="flex justify-between items-start">
            <li>Notification</li>
            <form className="">
              <div className="flex items-center py-1">
                <label htmlFor="newsletter">
                  Sign up for weekly newsletter
                </label>
                <input type="checkbox" className="ml-2" />
              </div>
              <div className="flex items-center py-1">
                <label htmlFor="newsletter">
                  Recieve Email on Transactions
                </label>
                <input type="checkbox" className="ml-2" defaultChecked />
              </div>
              <div className="flex items-center py-1">
                <label htmlFor="newsletter">Sign up for </label>
                <input type="checkbox" className="ml-2" />
              </div>
              <div className="flex items-center py-1">
                <label htmlFor="newsletter">
                  Sign up for weekly newsletter
                </label>
                <input type="checkbox" className="ml-2" />
              </div>
            </form>
          </ul>

          <ul className="flex justify-between my-2 pt-6">
            <li>Security</li>
            <ul className="text-right w-3/6 ">
              <li className="p-2 flex justify-between items-center ">
                <span>Change Email</span>
                <input
                  placeholder={currentUser.email}
                  type="text"
                  ref={emailRef}
                  className="border-2  rounded-md border-gray-800 p-2"
                />
              </li>
              <li className=" p-2 flex justify-between items-center">
                <span>Change Password</span>
                <input
                  ref={passwordRef}
                  type="text"
                  className="border-2  rounded-md border-gray-800 p-2 "
                />
              </li>

              <li className="p-2 flex justify-end  ">
                <button
                  onClick={(e) => update(e)}
                  type="text"
                  className="disabled:bg-red-300 bg-gray-500 rounded-md text-white hover:bg-gray-600 p-2 shadow-xl active:shadow-md"
                >
                  change
                </button>
              </li>
            </ul>
          </ul>
          <li className="flex ">
            <button
              onClick={deleteAcc}
              className="shadow-lg text-white rounded-lg bg-red-400 p-3 hover:bg-red-600"
            >
              Delete Account
            </button>
          </li>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Settings;
