import "./App.css";
import LeftMenu from "./components/LeftMenu";
import Nav from "./components/Nav";
import Day from "./components/Day";

function App() {
  return (
    <>
      <div className="container">
        <Nav></Nav>
        <LeftMenu></LeftMenu>
        <Day></Day>
        <h1 className="text-4xl text-center">Draw Today</h1>
      </div>
    </>
  );
}

export default App;
