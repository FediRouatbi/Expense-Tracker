import React from "react";
import { GetData } from "../context/AppContext";
const Settings = () => {
  const { handelSubmit } = GetData();
  console.log(handelSubmit);
  return (
    <div className="settings mx-auto p-4 pt-16 h-screen w-4/5 ">
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
        <ul className="flex justify-between my-2">
          <li>Security</li>
          <ul className="text-right">
            <li>
              <a href="//">Set Passcode</a>
            </li>
            <ul className="hidden">
              <li>
                <a href="//">Set Passcode</a>
              </li>
              <li>
                <a href="//">Require Passcode to complete Payment</a>
              </li>
            </ul>
            <li>
              <a href="//">Change Password</a>
            </li>
            <li>
              <a href="//">Two Factor Authentication</a>
            </li>
          </ul>
        </ul>
        <ul className="flex justify-between items-start">
          <li>Notification</li>
          <form className="">
            <div className="flex items-center py-1">
              <label htmlFor="newsletter">Sign up for weekly newsletter</label>
              <input type="checkbox" className="ml-2" />
            </div>
            <div className="flex items-center py-1">
              <label htmlFor="newsletter">Recieve Email on Transactions</label>
              <input type="checkbox" className="ml-2" defaultChecked />
            </div>
            <div className="flex items-center py-1">
              <label htmlFor="newsletter">Sign up for </label>
              <input type="checkbox" className="ml-2" />
            </div>
            <div className="flex items-center py-1">
              <label htmlFor="newsletter">Sign up for weekly newsletter</label>
              <input type="checkbox" className="ml-2" />
            </div>
          </form>
        </ul>

        <ul className="my-10">
          <li>
            <a href="//">About</a>
          </li>
          <li>
            <a href="//">Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
