interface DayOptions {
  todaysWords: string[];
}

export default function Day({ todaysWords }: DayOptions) {
  const wordList = todaysWords.map((word) => {
    return <p key={word}>{word}</p>;
  });

  return (
    <div className="grow rounded bg-green-500 p-4">
      <div className="flex justify-between align-items">{wordList}</div>
    </div>
  );
}
