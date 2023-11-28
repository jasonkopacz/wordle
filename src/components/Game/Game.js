import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import Keyboard from '../Keyboard/Keyboard';
import { checkGuess } from '../../game-helpers';
// Pick a random word on every pageload.

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const validatedGuesses = guesses.map(guess => (
    checkGuess(guess, answer)
  ))
  return <>
    <PreviousGuesses guesses={guesses} answer={answer} />
    <GuessInput guesses={guesses} setGuesses={setGuesses} answer={answer} setAnswer={setAnswer}/>
    <Keyboard validatedGuesses={validatedGuesses} />
  </>
}

export default Game;
