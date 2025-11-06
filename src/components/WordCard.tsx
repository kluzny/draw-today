interface WordCardProps {
  word: string;
  selectedWord: string;
  selectWord: CallableFunction;
}

export default function WordCard({ word, selectWord, selectedWord }: WordCardProps) {
  const border = selectedWord == word ? "border-blue-500 hover:border-purple-500 " : "border-white hover:border-pink-500 "
  return (
    <button className={`min-h-32 flex flex-col items-center justify-center border-4 ${border} bg-gray-100 box-shadow hover:z-[1]`}
            onClick={() => { selectWord(word) }}>
      <div className="h-[50%] flex items-center justify-center">
        <h2 className="text-lg font-bold text-center break-all">{word}</h2>
      </div>
      <div className="max-h-[50%] overflow-y-auto">
        <p className="text-xs text-gray-600 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt.
        </p>
      </div>
    </button>
  );
}
