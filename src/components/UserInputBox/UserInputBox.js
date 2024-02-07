import React from "react";

function UserInputBox({ handleUserGuesses, disableInput }) {
  const [userGuess, setUserGuess] = React.useState({ guess: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(userGuess));
    handleUserGuesses({ guess: userGuess.guess });
    setUserGuess({ guess: "" });
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={userGuess.guess}
        onChange={(e) => setUserGuess({ guess: e.target.value.toUpperCase() })}
        pattern="[a-zA-Z]{5}"
        title="Please enter exactly 5 letters (A-Z, a-z)"
        placeholder="Input your guess, it should be 5 letters"
        disabled={disableInput}
      />
    </form>
  );
}

export default UserInputBox;
