import { useState } from "react";
import wordList from "./data/word-list.json";
import { Letters } from "./components/letter";
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
  });
  console.log("word to guess:", wordToGuess);

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return Letters({ alphabet });
}

export default App;
