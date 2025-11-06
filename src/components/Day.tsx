
import WordCard from "./WordCard";

interface DayOptions {
  todaysWords: string[];
  selectWord: CallableFunction;
  selectedWord: string;
}

export default function Day({ todaysWords, selectedWord, selectWord }: DayOptions) {
  const wordList = todaysWords.map(word => {
    return (
      <WordCard key={word} word={word} selectWord={selectWord} selectedWord={selectedWord}/>
    );
  });

  return (
    <div className="grow rounded bg-green-500 p-4">
      <h2 className="text-center">Choose a word for inspiriation</h2>
      <div className="flex justify-between align-items">{wordList}</div>
    </div>
  );
}
