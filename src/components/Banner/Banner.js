import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function Banner({ answer, length, won, }) {

  return <div className={`${won ? 'happy' : 'sad'} banner`} id={won ? 'won' : 'lost'}>
    {won ? 
      <p>
        <strong>Congratulations!</strong>
        {' '}
        Got it in <strong>{length} guess{length > 1 ? 'es' : ''}</strong>    
      </p>
      : 
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>
        </p>
      }
  </div>;
}

export default Banner;
