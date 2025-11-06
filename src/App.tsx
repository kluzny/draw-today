import "./App.css";
import Nav from "./components/Nav";
import Day from "./components/Day";

import { add, startOfDay } from "date-fns";
import { useState } from "react";

import { randomWordsN } from "./helpers/words";

function App() {
  const today = startOfDay(new Date());
  const [currentDate, setCurrentDate] = useState<Date>(today);
  const [selectedWord, setSelectedWord] = useState<string>("");

  const startOfCurrentDate = startOfDay(currentDate);
  const todaysWords = randomWordsN(5, +startOfCurrentDate);

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

  const selectWord = (word: string) => {
    setSelectedWord(currentWord => {
      if(word == currentWord) {
        return ""
      } else {
        return word
      }
    })
  }

  return (
    <>
      <div className="container mx-auto my-8 space-y-4">
        <Nav
          currentDate={currentDate}
          increment={incrementDate}
          decrement={decrementDate}
        ></Nav>
        <div className="flex space-x-4">
          <Day todaysWords={todaysWords} selectedWord={selectedWord} selectWord={selectWord}></Day>
        </div>
      </div>
    </>
  );
}

export default App;
