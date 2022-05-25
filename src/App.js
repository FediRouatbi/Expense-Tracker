import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Aside from "./components/Aside";
function App() {
  return (
    <div className="container">
      <Nav />
      <Main />
      <Aside />
    </div>
  );
}

export default App;
