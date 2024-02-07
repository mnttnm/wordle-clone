import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import UserInputBox from "../UserInputBox/UserInputBox";
import ResultBanner from "../ResultBanner/ResultBanner";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuesses, setUserGuesses] = React.useState([]);
  const [shouldShowBanner, setShouldShowBanner] = React.useState(false);

  function handleUserGuesses({ guess }) {
    if (userGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setShouldShowBanner(true);
      setUserGuesses([]);
      return;
    }

    const nextUserGuesses = [...userGuesses];
    nextUserGuesses.push(guess);
    setUserGuesses(nextUserGuesses);
    if (guess === answer) {
      setShouldShowBanner(true);
      return;
    }
  }

  return (
    <div>
      <Guess guesses={userGuesses} answer={answer} />
      <UserInputBox handleUserGuesses={handleUserGuesses} disableInput={shouldShowBanner} />
      {shouldShowBanner && (
        <ResultBanner
          winStatus={answer === userGuesses[userGuesses.length - 1]}
          numberOfGuesses={userGuesses.length}
          answer={answer}
        />
      )}
    </div>
  );
}

export default Game;
