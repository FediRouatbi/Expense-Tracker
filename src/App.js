import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Sticky from "./components/Sticky";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllExpenses from "./pages/AllExpenses";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import { useState } from "react";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const [user, setUser] = useState(true);

  return (
    <BrowserRouter>
      {user ? (
        <div className="mycontainer">
          <Nav setUser={setUser} />
          <div className="container__inner">
            <Sticky setUser={setUser} />
            <Routes>
              <Route
                path="/home"
                element={
                  <div className="myflex">
                    <Main />
                    <Aside />
                  </div>
                }
              />
              <Route path="/expenses" element={<AllExpenses />} />
              <Route path="/Settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
