import classes from "./letter.module.css";

const LetterWrapper = (letter: string) => {
  return <h2>{letter}</h2>;
};

export const Letters = (alphabet: string[]) => {
  return (
    <div className={classes.alphabet_container}>
      {alphabet.map((letter) => {
        return (
          <div
            className={classes.letter_wrapper}
            key={letter}
            onClick={(e) => {
              console.log(e.target.firstChild.data);
            }}
          >
            {LetterWrapper(letter)}
          </div>
        );
      })}
    </div>
  );
};
