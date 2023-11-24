import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import Keyboard from '../Keyboard/Keyboard';
// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.info({ answer });
  const [guesses, setGuesses] = React.useState([]);
  return <>
    <PreviousGuesses guesses={guesses} answer={answer} />
    <GuessInput guesses={guesses} setGuesses={setGuesses} answer={answer} setAnswer={setAnswer}/>
    <Keyboard />
  </>
}

export default Game;
