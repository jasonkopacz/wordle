import React from 'react';
import { range } from '../../utils';
import { TOP_ROW, MIDDLE_ROW, BOTTOM_ROW } from '../../constants';

function Keyboard() {
  return(
  <div className='keyboard-wrapper'>
    <div className='keyboard-row top'>
      {
        range(10).map(i => (
          <p className="keyboard-key" key={i}>{TOP_ROW[i]}</p>
          ))}
    </div>
    <div className='keyboard-row middle'>
      {
        range(9).map(i => (
          <p className="keyboard-key" key={i}>{MIDDLE_ROW[i]}</p>
          ))}
    </div>
    <div className='keyboard-row bottom'>
      {range(7).map(i => (
        <p className="keyboard-key" key={i}>{BOTTOM_ROW[i]}</p>
        ))}
    </div>
  </div>
  )
}

export default Keyboard;
