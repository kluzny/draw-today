export interface Word {
  text: string;
  definitions: string[];
};

export interface GameDay {
  day: string;
  selectedWord: string;
  availableWords: Word[];
};