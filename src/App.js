import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SingUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import AppContext from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import AllExpenses from "./pages/AllExpenses";
import Sticky from "./components/Sticky";
import Nav from "./components/Nav";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex">
          <Nav />
          <Sticky />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SingUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/Expense-Tracker" element={<PrivateRoute />}>
              <Route path="/Expense-Tracker" element={<Dashboard />} />
            </Route>
            <Route path="/settings" element={<PrivateRoute />}>
              <Route path="/settings" element={<Settings />} />
            </Route>
            <Route path="/expenses" element={<PrivateRoute />}>
              <Route path="/expenses" element={<AllExpenses />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
