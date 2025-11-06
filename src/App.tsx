import "./App.css";
import LeftMenu from "./components/LeftMenu";
import Nav from "./components/Nav";
import Day from "./components/Day";

function App() {
  return (
    <>
      <div className="container mx-auto my-8 space-y-4">
        <Nav></Nav>
        <div className="flex space-x-4">
          <LeftMenu></LeftMenu>
          <Day></Day>
        </div>
      </div>
    </>
  );
}

export default App;
