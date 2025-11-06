import seedrandom from "seedrandom";
import wordlistContent from "../assets/wordlist-20210729.trimmed.txt?raw";

let cachedWords: string[] | null = null;

function getWords(): string[] {
  if (!cachedWords) {
    cachedWords = wordlistContent.trim().split("\n");
  }
  return cachedWords;
}

function getRng(seed?: number): () => number {
  return seed !== undefined ? seedrandom(seed.toString()) : Math.random;
}

export function randomWord(seed?: number): string {
  const words = getWords();
  const rng = getRng(seed);
  const randomIndex = Math.floor(rng() * words.length);
  return words[randomIndex];
}

export function randomWordsN(n: number, seed?: number): string[] {
  const rng = getRng(seed);
  const seeds: number[] = [];

  for (let i = 0; i < n; i++) {
    seeds.push(Math.floor(rng() * Number.MAX_SAFE_INTEGER));
  }

  return seeds.map((s) => randomWord(s));
}
