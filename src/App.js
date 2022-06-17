import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Sticky from "./components/Sticky";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllExpenses from "./pages/AllExpenses";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useState } from "react";

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
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
