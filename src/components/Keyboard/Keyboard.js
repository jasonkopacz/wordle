import React from 'react';
import { range } from '../../utils';
import { TOP_ROW, MIDDLE_ROW, BOTTOM_ROW } from '../../constants';

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      if (statusObj[letter] == 'correct') return;
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

function Keyboard({ validatedGuesses }) {
  let statuses = getStatusByLetter(validatedGuesses)
  return(
  <div className='keyboard-wrapper'>
    <div className='keyboard-row top'>
      {
        range(10).map(i => (
          <p className={`keyboard-key ${statuses[TOP_ROW[i]] || ''}`} key={i}>{TOP_ROW[i]}</p>
          ))}
    </div>
    <div className='keyboard-row middle'>
      {
        range(9).map(i => (
          <p className={`keyboard-key ${statuses[MIDDLE_ROW[i]] || ''}`} key={i}>{MIDDLE_ROW[i]}</p>
          ))}
    </div>
    <div className='keyboard-row bottom'>
      {range(7).map(i => (
        <p className={`keyboard-key ${statuses[BOTTOM_ROW[i]] || ''}`} key={i}>{BOTTOM_ROW[i]}</p>
        ))}
    </div>
  </div>
  )
}

export default Keyboard;
