import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';

function PreviousGuesses({ guesses, answer }) {
  return (
    <div className='guess-results'>
      {range(6).map(columnIndex => (
        <Guess guess={guesses[columnIndex]} answer={answer} key={columnIndex} />
      ))}
    </div>
  )
}

export default PreviousGuesses;
