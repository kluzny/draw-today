import "./App.css";
import LeftMenu from "./components/LeftMenu";
import Nav from "./components/Nav";
import Day from "./components/Day";

import { add } from "date-fns";
import { useState } from "react";

import { randomWord, randomWordsN } from "./helpers/words";

function App() {
  console.log({ word: randomWord() });
  console.log({ words: randomWordsN(5) });

  const today = new Date();
  const [currentDate, setCurrentDate] = useState<Date>(today);

  const decrementDate = () => {
    setCurrentDate((current) => {
      return add(current, { days: -1 });
    });
  };

  const incrementDate = () => {
    setCurrentDate((current) => {
      return add(current, { days: 1 });
    });
  };

  return (
    <>
      <div className="container mx-auto my-8 space-y-4">
        <Nav
          currentDate={currentDate}
          increment={incrementDate}
          decrement={decrementDate}
        ></Nav>
        <div className="flex space-x-4">
          <LeftMenu></LeftMenu>
          <Day></Day>
        </div>
      </div>
    </>
  );
}

export default App;
