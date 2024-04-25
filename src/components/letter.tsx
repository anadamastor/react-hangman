import { useState } from "react";
import classes from "./letter.module.css";

const LetterWrapper = (props: { letter: string }) => {
  return <h2>{props.letter.toUpperCase()}</h2>;
};
const GuessedLetters = (props: { guessedLetters: string }) => {
  return props.guessedLetters;
};

const isGuessInWord = (newGuessedLetter: string, alphabet: string[]) => {
  if (alphabet.includes(newGuessedLetter)) {
    console.log("Letter is not in the word");
    return;
  }
  console.log("Letter is in the word");
};
export const Letters = (props: { alphabet: string[] }) => {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return (
    <>
      <div className={classes.alphabet_container}>
        {props.alphabet.map((letter) => {
          return (
            <div
              className={classes.letter_wrapper}
              key={letter}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                const newGuessedLetter =
                  e.currentTarget.firstChild?.textContent;
                setGuessedLetters([...guessedLetters, newGuessedLetter]);
                isGuessInWord(newGuessedLetter, props.alphabet);
              }}
            >
              {LetterWrapper({ letter })}
            </div>
          );
        })}
      </div>
      <h1>{guessedLetters}</h1>
    </>
  );
};
