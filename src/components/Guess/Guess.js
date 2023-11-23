import React from 'react';
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer, id }) {
  let statuses = [];
  if (guess) {
    checkGuess(guess, answer).forEach(obj => (
      statuses.push(obj['status'])
    ))
  }
  console.log(answer)
  return<>
    <p className='guess' key={id}>
      {range(0, 5, 1).map((index) => (
        <span className={`cell${statuses.length > 0 ? ` ${statuses[index]}` : ""}`} key={index}>{guess ? guess[index] : ""}</span>
        ))}
    </p>
  </>
}

export default Guess;
