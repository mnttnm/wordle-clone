import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ guesses, answer }) {
  return (
    <div>
      {guesses &&
        range(0, NUM_OF_GUESSES_ALLOWED).map((i) => {
          return (
            <p className="guess" key={i}>
              {guesses[i]
                ? checkGuess(guesses[i], answer).map(({ letter, status }, index) => {
                    return (
                      <span key={index} className={`cell ${status}`}>
                        {letter}
                      </span>
                    );
                  })
                : range(0, 5).map((index) => <span key={index} className="cell"></span>)}
            </p>
          );
        })}
    </div>
  );
}

export default Guess;
