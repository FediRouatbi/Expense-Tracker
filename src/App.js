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

function App() {
  const user = true;

  return (
    <BrowserRouter>
      {user ? (
        <div className="mycontainer">
          <Nav />
          <div className="container__inner">
            <Sticky />
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
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
