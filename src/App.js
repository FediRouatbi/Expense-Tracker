import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Sticky from "./components/Sticky";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllExpenses from "./pages/AllExpenses";
import Settings from "./pages/Settings";
function App() {
  return (
    <BrowserRouter>
      <Sticky />
    
        <div className="container">
          <Nav />
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex">
                  <Main />
                  <Aside />
                </div>
              }
            />
            <Route path="/expenses" element={<AllExpenses />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
     
    </BrowserRouter>
  );
}

export default App;
