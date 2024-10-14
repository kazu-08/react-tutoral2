import { useState } from "react";

export default function App() {
  const [previousGuesses, setPreviousGuesses] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const guessField = event.target.elements.guessField;
    const newUserGuess = Number(guessField.value);
    setPreviousGuesses([].concat(previousGuesses, [newUserGuess]));
    guessField.value = "";
    guessField.focus();
  }

  const guessCount = previousGuesses.length;
  const userGuess = guessCount === 0 ? null : previousGuesses[guessCount - 1];

  return (
    <>
      <h1>Number guessing game</h1>

      <p>
        We have selected a random number between 1 and 100. See if you can guess
        it in 10 turns or fewer. We'll tell you if your guess was too high or
        too low.
      </p>

      <div class="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="guessField">Enter a guess: </label>
          <input
            type="number"
            min="1"
            max="100"
            required
            name="guessField"
            class="guessField"
          />
          <input
            type="submit"
            value="Submit guess"
            class="guessSubmit"
          />
        </form>
      </div>

      {userGuess != null && (
        <div class="resultParas">
          <p class="guesses">Previous guesses: {previousGuesses.join(" ")}</p>
          <p class="lastResult"></p>
          <p class="lowOrHi"></p>
        </div>
      )}
    </>
  );
}