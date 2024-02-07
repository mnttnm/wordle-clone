import React from "react";

function UserGuessesRegistry({ userGuesses }) {
  return (
    userGuesses && (
      <div className="guess-results">
        {userGuesses.map((guess, index) => (
          <p key={index} className="guess">
            {guess}
          </p>
        ))}
      </div>
    )
  );
}

export default UserGuessesRegistry;
